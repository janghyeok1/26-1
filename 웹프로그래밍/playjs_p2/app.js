const express = require("express"), http = require("http");
const https = require("https");
const fs = require("fs");
const static = require("serve-static");
const options = {
    key: fs.readFileSync("cert.key"),
    cert: fs.readFileSync("cert.crt")
};
const app = express();
app.set("port", process.env.PORT || 8080);
app.set("host", "203.252.166.181");
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get("/", (req, res) => {
    res.redirect("playjs_p2.html");
});
app.get("/rss", (req ,res) => {
    console.log("rss data requested");
    const feed = "https://news.sbs.co.kr/news/SectionRssFeed.do?sectionId=02&plink=RSSREADER"
    https.get(feed, (httpres) => {
        let rss_res = "";
        httpres.on("data", (chunk) => {
            rss_res += chunk;
        });
        httpres.on("end", () => {
            res.set("Content-Type", "text/xml");
            res.send(rss_res);
            console.log("rss response completed");
        });
    });
});
app.get('/getNotes', (req, res) => {
    fs.readFile("./data/note.json", "utf-8", (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({
                message: "파일 읽기 실패"
            });
        }
        res.type("application/json");
        res.send(data);
    });
});
app.post('/saveNote', (req, res) => {
    const newNote = req.body;
    fs.readFile("./data/note.json", 'utf-8', (err, data) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                message: "파일 읽기 실패"
            });
        }
        const notes = JSON.parse(data);
        notes.push(newNote);
        const notesStr = JSON.stringify(notes);
        fs.writeFile("./data/note.json", notesStr, 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send('파일 저장 실패');
            }
            res.send(notesStr);
        });
    });
});
http.createServer(app).listen(app.get("port"), app.get("host"), () => {
    console.log("Express server running at" + app.get("port") + app.get("host"));
});
const PORT = 8000;
https.createServer(options, app).listen(PORT, app.get("host"), () => {
    console.log("Express server running at" + PORT + app.get("port"));
});
/*
get방식 -> query
post방식 -> body


npm install -g mkcert
mkcert create-ca
mkcert create-cert
*/