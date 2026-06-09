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
});
const put_name = () => {
    const footer = document.querySelector("footer");
    const date = new Date().getDate();
    const str =  `<div><strong>장혁, ${date}</strong></div>`;
    footer.insertAdjacentHTML("afterbegin", str);
};
//footer
const show_note_form = () => {
    const note_form = document.querySelector("#note_form");
    note_form.style.display = "block";
    const left = (window.innerWidth - note_form.offsetWidth) / 2;
    const top = (window.innerHeight - note_form.offsetHeight) / 2;
    note_form.style.left = `${left}px`;
    note_form.style.top = `${left}px`;
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
}
const click_open = (dt, dd) => {
    dt.classList.remove("closed");
    dd.classList.remove("closed");
}
//information