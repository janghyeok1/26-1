const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const static = require("serve-static");
const options = {
    key: fs.readFileSync("cert.key"),
    cert: fs.readFileSync("cert.crt")
};
const app = express();
app.set("port", process.env.PORT || 8080);
app.set("host", "100.88.98.57")

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.redirect("playjs.html");
})
app.get("/get_note", (req, res) => {
    fs.readFile("./data/note.json", "utf8", (err, data) => {
        if(err) return res.status(500).json();
        res.type("application/json");
        res.send(data);
    });
});
app.post("/save_note", (req, res) => {
    fs.readFile("./data/note.json", "utf8", (err, data) => {
        if(err) return res.status(500).json();
        const new_note = req.body;
        const note = JSON.parse(data);
        note.push(new_note);
        const note_str = JSON.stringify(note);
        fs.writeFile("./data/note.json", note_str, "utf8", (err) => {
            if(err) return res.status(500).send(err);
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
            res.set("Content-Type", "text/xml");
            res.send(rss_res);
        });
    });
});
http.createServer(app).listen(app.get("port"), app.get("host"), () => {
    console.log("Express server running at " +  app.get("host") + ":" + app.get("port"));
});
https.createServer(options, app).listen(8000, app.get("host"), () => {
    console.log("Express server running at " +  app.get("host") + ":" + 8000);
});
/*
req: 요청에 포함된 data
res: 반환 data
*/