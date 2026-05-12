const APP = {
    user: "",
    messages: []
};

// ---------------- SETUP ----------------

const setup = () => {

    APP.select = document.getElementById("message-sender");
    APP.input = document.getElementById("message-input");
    APP.send = document.getElementById("send-button");
    APP.clear = document.getElementById("clear-all");
    APP.chat = document.getElementById("chat-box");

    initUser();
    loadMessages();
    bindEvents();
    render();

    startSync();
};

// ---------------- USER ----------------

const initUser = () => {

    let saved = sessionStorage.getItem("user");

    if (saved !== null) {
        APP.user = saved;
    } else {

        let i = Math.floor(Math.random() * APP.select.options.length);

        APP.user = APP.select.options[i].value;

        sessionStorage.setItem("user", APP.user);
    }

    APP.select.value = APP.user;
};

// ---------------- STORAGE ----------------

const loadMessages = () => {

    let data = localStorage.getItem("messages");

    if (data) {
        APP.messages = JSON.parse(data);
    } else {
        APP.messages = [];
    }
};

const saveMessages = () => {

    localStorage.setItem("messages", JSON.stringify(APP.messages));
};

// ---------------- EMOJIS (UNICODE) ----------------

const parseEmojis = (text) => {

    if (text.includes(":)")) {
        text = text.replaceAll(":)", "\u{1F60A}"); // 😊
    }

    if (text.includes(":(")) {
        text = text.replaceAll(":(", "\u{1F622}"); // 😢
    }

    if (text.includes(":D")) {
        text = text.replaceAll(":D", "\u{1F603}"); // 😃
    }

    if (text.includes("<3")) {
        text = text.replaceAll("<3", "\u{2764}"); // ❤
    }

    return text;
};

// ---------------- SEND ----------------

const sendMessage = () => {

    let text = APP.input.value;

    if (text.trim() === "") {
        // do nothing
    } else {

        APP.messages.push({
            id: Date.now(),
            user: APP.user,
            text: parseEmojis(text),
            time: Date.now()
        });

        saveMessages();

        APP.input.value = "";

        render();
    }
};

// ---------------- DELETE ----------------

const deleteMessage = (id) => {

    let sure = confirm("Are you sure?");

    if (sure === true) {

        let newList = [];

        for (let i = 0; i < APP.messages.length; i++) {

            if (APP.messages[i].id !== id) {
                newList.push(APP.messages[i]);
            }
        }

        APP.messages = newList;

        saveMessages();

        render();
    }
};

// ---------------- RENDER ----------------

const render = () => {

    APP.chat.innerHTML = "";

    for (let i = 0; i < APP.messages.length; i++) {

        let m = APP.messages[i];

        let div = document.createElement("div");
        div.className = "message";

        if (m.user === APP.user) {
            div.className = "message same-user";
        }

        let time = document.createElement("div");
        time.className = "timestamp";
        time.textContent = formatDate(m.time);

        let sender = document.createElement("div");
        sender.className = "sender";
        sender.textContent = m.user;

        if (m.user === APP.user) {

            let btn = document.createElement("button");

            btn.onclick = () => deleteMessage(m.id);

            sender.appendChild(btn);
        }

        let text = document.createElement("div");
        text.textContent = m.text;

        div.appendChild(time);
        div.appendChild(sender);
        div.appendChild(text);

        APP.chat.prepend(div);
    }

    APP.chat.scrollTop = 0;
};

// ---------------- DATE ----------------

const formatDate = (time) => {

    let d = new Date(time);

    let months = [
        "January","February","March","April",
        "May","June","July","August",
        "September","October","November","December"
    ];

    return d.getDate() + " " +
        months[d.getMonth()] + " " +
        String(d.getFullYear()).slice(2) + " " +
        String(d.getHours()).padStart(2,"0") + ":" +
        String(d.getMinutes()).padStart(2,"0") + ":" +
        String(d.getSeconds()).padStart(2,"0");
};

// ---------------- EVENTS ----------------

const bindEvents = () => {

    APP.send.addEventListener("click", sendMessage);

    APP.input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            sendMessage();
        }
    });

    APP.clear.addEventListener("click", () => {

        APP.messages = [];

        saveMessages();

        render();
    });

    APP.select.addEventListener("change", () => {

        APP.user = APP.select.value;

        sessionStorage.setItem("user", APP.user);

        render();
    });
};

// ---------------- SYNC ----------------

const startSync = () => {

    setInterval(() => {

        loadMessages();

        render();

    }, 1000);
};

window.addEventListener("load", setup);