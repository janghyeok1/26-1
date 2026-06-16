document.addEventListener("DOMContentLoaded", () =>{
    put_name();

    get_note();
    document.querySelector("#add_img").addEventListener("click", show_note_form);
    document.querySelector("#saveNote").addEventListener("click", save_note);
    window.addEventListener("resize", show_note_form);

    const dl = document.querySelectorAll(".accordion");
    dl.forEach(dl => {
        const dt = dl.querySelectorAll("dt");
        const dd = dl.querySelectorAll("dd");
        close_dl(dt, dd);
        dt.forEach(item => {
            item.addEventListener("click", () => {
                close_dl(dt, dd);
                click_open(item, item.nextElementSibling);
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
        const start_timer = () => {if(!timer) timer = setInterval(switching, 4000);}
        const stop_timer = () => {
            if(timer){
                clearInterval(timer);
                timer = null;
            }
        };
        start_timer();
        item.addEventListener("mouseover", stop_timer);
        item.addEventListener("mouseout", start_timer);
    });

    document.querySelector("#getText1").addEventListener("click", get_text1);
    document.querySelector("#getText2").addEventListener("click", get_text2);

    get_RSS();
});
const put_name = () => {
    const footer = document.querySelector("footer");
    const date = new Date().getDate();
    const str =  `<div><strong>장혁, ${date}</strong></div>`;
    footer.insertAdjacentHTML("beforeend", str);
};
//footer
const show_note_form = () => {
    const note_form = document.querySelector("#note_form");
    if(!note_form.classList.contains("popup")) {
        note_form.classList.add("popup");
        note_form.style.display = "block";
    }
    const left = (window.innerWidth - note_form.offsetWidth) / 2;
    const top = (window.innerHeight - note_form.offsetHeight) / 2;
    note_form.style.left = `${left}px`;
    note_form.style.top = `${top}px`;
};
const save_note = async () => {
    const note_form = document.querySelector("#note_form");
    const input = note_form.querySelectorAll(".note");
    const note = {
        "title": input[0].value,
        "date": input[1].value,
        "content": input[2].value
    };
    const res = await fetch("/save_note", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(note)
    });
    const data = await res.json();
    close_note_form();
    print_note(data);
};
const close_note_form = () => {
    const note_form = document.querySelector("#note_form");
    note_form.style.display = "none";
    note_form.querySelectorAll(".note").forEach(item => item.value = "");
};
const print_note = (data) => {
    const note_area = document.querySelector("#note");
    note_area.innerHTML = "";
    data.forEach(item => {
        const note = `<div>
            <strong>${item.title ? item.title : "제목없음"}</strong><br>
            <i>${item.date ? item.date : "날짜없음"}</i><br>
            <p>${item.content ? item.content : "내용없음"}</p><br>
        </div>`
        note_area.insertAdjacentHTML("beforeend", note);
    });
};
const get_note = async () => {
    const res = await fetch("/get_note");
    const data = await res.json()
    print_note(data);
};
//schedule note

const close_dl = (dt, dd) => {
    dt.forEach(item => item.classList.add("closed"));
    dd.forEach(item => item.classList.add("closed"));
};
const click_open = (dt, dd) => {
    dt.classList.remove("closed");
    dd.classList.remove("closed");
};
//information

const get_text1 = async () => {
    const text_area = document.querySelector("#textbox");
    text_area.innerHTML = "";
    const res = await fetch("./data/data.txt");
    const text = await res.text();
    const data = JSON.parse(text);
    let tableHTML = ``;
    data.forEach(item => {tableHTML += `${item.name}<br>`;})
    text_area.insertAdjacentHTML("beforeend", tableHTML);
};
const get_text2 = async () => {
    const text_area = document.querySelector("#textbox");
    text_area.innerHTML = "";
    const res = await fetch("./data/data.txt");
    const text = await res.text();
    const data = JSON.parse(text);
    let tableHTML = `
        <table border="1">
            <tr>
                <th>이름</th>
                <th>아이디</th>
                <th>학과</th>
                <th>수강과목</th>
                <th>전화번호</th>
            </tr>`;
    data.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.id}</td>
                <td>${item.department}</td>
                <td>${item.class.join(", ")}</td>
                <td>${item.phone}</td>`;
    })
    tableHTML += `</table>`;
    text_area.insertAdjacentHTML("beforeend", tableHTML);
};
//textarea

const get_RSS = async () => {
    const res = await fetch("/rss");
    const data = await res.text();
    print_news(data);
};
const print_news = (data) => {
    const news_area = document.querySelector("#news");
    const parser = new DOMParser();
    const xml_data = parser.parseFromString(data, "text/xml");
    const news_data = [...xml_data.querySelectorAll("item")];
    let newsHTML = `<ul>`;
    news_data.forEach(item => {
        let title = item.querySelector("title").textContent;
        let date = item.querySelector("pubDate").textContent;
        let link = item.querySelector("link").textContent;
        newsHTML += `<li><a href="${link}"target="_blank">${title}</a>(${date})</li>`;
    })
    newsHTML += `</ul>`;
    news_area.insertAdjacentHTML("beforeend", newsHTML);
}
//RSS