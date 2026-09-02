const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");
const static = require("serve-static");
const app = express();
app.set("port", process.env.PORT || 8080);
app.set("host", "192.168.219.100");

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
    res.redirect("playjs.html");
});
app.get("/get_note", (req, res) => {
    fs.readFile("./data/note.json", "utf8", (err, data) => {
        if(err) return res.status(500).json();
        res.type("application/json");
        res.send(data);
    });
});
app.post("/save_note", (req, res) => {
    fs.readFile("./data/note.json", "utf8", (err, data) =>{
        if(err) return res.status(500).json();
        const new_note = req.body;
        const note = JSON.parse(data);
        note.push(new_note);
        const note_str = JSON.stringify(note);
        fs.writeFile("./data/note.json", note_str, "utf8", (err) => {
            res.send(note_str);
        });
    });
});
app.get("/rss", (req, res) => {
    const feed = "https://kr.investing.com/rss/news_25.rss";
    https.get(feed, (httpres) => {
        let rss_res = "";
        httpres.on("data", (chunk) => {
            rss_res += chunk;
        });
        httpres.on("end", () => {
            res.type("text/xml");
            res.send(rss_res);
        });
    });
});
http.createServer(app).listen(app.get("port"), app.get("host"));

/*
fs.readFile("파일이름", "utf8", (err, data) => {})
fs.writeFile("파일이름", 입력 대상, "utf8", (err) => {})
JSON.parse: JS객체로 변환
JSON.stringify: json문자열(`어쩌고`)로 변환
res.type("application/json"): 데이터 타입이 json 알림
res.send: 응답 보내기
*/