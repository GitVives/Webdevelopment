const setup = () => {
    let button = document.querySelector('#button');
    button.addEventListener('click', handleSearch);

    loadHistory();

    document.getElementById("commandoField").addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSearch();
    });

    const clearBtn = document.getElementById("clearHistory");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearHistory);
    }
}

const STORAGE_KEY = "command_history";

const handleSearch = () => {
    let input = document.getElementById("commandoField");
    let value = input.value.trim();

    if (!value.startsWith("/")) {
        alert("Use commands like /y cats");
        return;
    }

    let parts = value.split(" ");
    let command = parts[0];
    let query = parts.slice(1).join(" ");

    let url = "";
    let title = "";
    let bgColor = "";

    switch (command) {

        case "/y":
            url = "https://www.youtube.com/results?search_query=" + query;
            title = "YouTube";
            bgColor = "red";
            break;

        case "/g":
            url = "https://www.google.com/search?q=" + query;
            title = "Google";
            bgColor = "blue";
            break;

        case "/i":
            url = "https://www.instagram.com/explore/tags/" + query;
            title = "Instagram";
            bgColor = "#E1306C";
            break;

        case "/x":
            url = "https://x.com/hashtag/" + query;
            title = "X (Twitter)";
            bgColor = "black";
            break;

        case "/r":
            location.reload();
            return;

        default:
            alert("Unknown command");
            return;
    }

    const item = { title, query, url, bgColor };

    addCard(item);
    saveToStorage(item);

    window.open(url, "_blank");

    input.value = "";
}

const addCard = (item) => {
    const history = document.getElementById("history");

    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4";

    const card = document.createElement("div");
    card.className = `card h-100 shadow text-white`;
    card.style.backgroundColor = item.bgColor;

    card.innerHTML = `
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text flex-grow-1">${item.query}</p>
      <button class="btn btn-light mt-2">Go</button>
    </div>`;

    card.querySelector("button").addEventListener("click", () => {
        window.open(item.url, "_blank");
    });

    col.appendChild(card);
    history.prepend(col);
}

const saveToStorage = (item) => {
    const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    history.unshift(item);

    const limited = history.slice(0, 30);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(limited));
}

const loadHistory = () => {
    const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    history.forEach(item => addCard(item));
}

const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    document.getElementById("history").innerHTML = "";
}

window.addEventListener("load", setup);