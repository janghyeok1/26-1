document.addEventListener("DOMContentLoaded", () => {
    putname();
    getnote();
    const add = document.querySelector("#add_img");
    add.addEventListener("click", shownote);
    const save = document.querySelector("#saveNote");
    save.addEventListener("click",savenote);
    window.addEventListener("resize", winresize);

    const dl = document.querySelectorAll(".accordion");
    dl.forEach(item => {
        const dt = item.querySelectorAll("dt");
        const dd = item.querySelectorAll("dd");
        closeall(dt, dd);
        dt.forEach(item => {
            item.addEventListener("click", () => {
                closeall(dt, dd);
                open1(item, item.nextElementSibling);
            });
        });
    });
    const slideshow = document.querySelectorAll(".slideshow");
    slideshow.forEach(item => {
        let timer = null;
        const switching = () => {
            const img = item.querySelectorAll("img");
            img[0].classList.add("alt");
            img[1].classList.remove("alt");
            item.appendChild(img[0]);
        };
        const start = () => {
            if(!timer) timer = setInterval(switching, 4000);
        }
        const stop = () => {
            if(timer) {
                clearInterval(timer);
                timer = null;
            }
        }
        start();
        item.addEventListener("mouseover", stop);
        item.addEventListener("mouseout", start)
    })
    get_RSS();
    const text1 = document.querySelector("#getText1");
    text1.addEventListener("click", gettext1);
    const text2 = document.querySelector("#getText2");
    text2.addEventListener("click", gettext2);
});
const putname = () => {
    const footer = document.querySelector("footer");
    const date = new Date();
    const year = date.getFullYear();
    const str = `<div><strong>장혁</strong>, ${year}</div>`;
    footer.insertAdjacentHTML("beforeend", str);
}
const shownote = () => {
    const noteform = document.querySelector("#note_form");
    if(!noteform.classList.contains("popup")){
        noteform.classList.add("popup");
        noteform.style.display = "block";
    }
    winresize();
};
const winresize = () => {
    const noteform = document.querySelector("#note_form");
    const left = (window.innerWidth - noteform.offsetWidth) / 2;
    const top = (window.innerHeight - noteform.offsetWidth) / 2;
    noteform.style.left = `${left}px`;
    noteform.style.top = `${top}px`;
};
const savenote = async () => {
    const noteform = document.querySelector("#note_form");
    const input = noteform.querySelectorAll(".note");
    const note = {
        "title": input[0].value,
        "date": input[1].value,
        "content": input[2].value
    };
    const res = await fetch("/save_note", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(note)
    });
    const data = await res.json();
    closenote();
    printnote(data);
};
const closenote = () => {
    const noteform = document.querySelector("#note_form");
    noteform.style.display = "none";
    noteform.classList.remove("popup");
    const note = noteform.querySelectorAll(".note");
    note.forEach(item => item.value = "");
}
const printnote = (data) => {
    const area = document.querySelector("#note");
    area.innerHTML = "";
    data.forEach(item => {
        const note = `<div>${item.title} ${item.date} ${item.content}<br></div>`;
        area.insertAdjacentHTML("beforeend", note);
    });
};
const getnote = async () => {
    const res = await fetch("/get_note");
    const data = await res.json();
    printnote(data);
};
const closeall = (dt, dd) => {
    dt.forEach(item => item.classList.add("closed"));
    dd.forEach(item => item.classList.add("closed"));
};
const open1 = (dt, dd) => {
    dt.classList.remove("closed");
    dd.classList.remove("closed");
};
const gettext1 = async () => {
    const area = document.querySelector("#textbox");
    area.innerHTML = "";
    const res = await fetch("./data/data.txt");
    const text = await res.text();
    const data = JSON.parse(text);
    let table = ``;
    data.forEach(item => {table += `${item.name} `;});
    area.insertAdjacentHTML("beforeend", table);
};
const gettext2 = async () => {
    const area = document.querySelector("#textbox");
    const res = await fetch("./data/data.txt");
    const text = await res.text();
    const data = JSON.parse(text);
    let table = `<table><tr><th>name</th><th>id</th><th>class</th><th>수강과목</th><th>phone</th></tr>`;
    data.forEach(item => {
        table += `<tr><td>${item.name}</td><td>${item.id}</td><td>${item.department}</td><td>${item.class.join(" ")}</td><td>${item.phone}</thd></tr>`;
    })
    table += `</table>`;
    area.insertAdjacentHTML("beforeend", table);
}
const get_RSS = async () => {
    const res = await fetch("/rss");
    const data = await res.text();
    printnews(data);
}
const printnews = (data) => {
    const area = document.querySelector("#news");
    const parser = new DOMParser();
    const newsstring = parser.parseFromString(data, "text/xml");
    const newsitem = [...newsstring.querySelectorAll("item")].slice(0, 10);
    let news = `<ul>`;
    newsitem.forEach(item => {
        let title = item.querySelector("title").textContent;
        let date = item.querySelector("pubDate").textContent;
        let link = item.querySelector("link").textContent;
        news += `<li><a href="${link}">${title}</a>(${date})</li>`;
    })
    news += `</ul>`;
    area.insertAdjacentHTML("beforeend", news);
}
/*
document.addEventListener("DOMContentLoaded", () => {}); 돔 생성시 실행
document.querySelector("태그"); 영역 지정
new Date().getFullYear; 날짜 불러와서 연도만 계산
insertAdjacementHTML("위치", 입력대상);
classList.contains("클래스") 클래스 존재여부
classList.add("클래스") 클래스 추가
classList.remove("클래스") 클래스 제거
style.display css 스타일
window.innerWidth 창 가로 길이
offsetWidth 객체 가로 길이
async () 파일 관련
await fetch("신호") app.js에 신호, req가 있으면 같이
forEach 배열 모든 원소에 대한 반복
innerHTML 영역 비우고 작성
await fetch -> await res.text() -> JSON.parse 순서대로
appendChild 맨뒤에 자식 추가
setInterval(함수, 시간) 시간마다 함수 호출
clearInterval(변수) set 넣은 변수, 시간 정지
mouseover 마우스 올리면
mouseout 마우스 벗어나면
new DOMParser() -> parser.parseFormString(data, "text"/xml") -> [...변수.querySelectorAll()]
slice(시작,개수) 개수 만큼만 저장
textContent 텍스트만 추출
*/ 