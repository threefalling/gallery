const button = document.querySelector(".main__button");
const wrap = document.querySelector(".main__wrap");
const loader = document.querySelector(".main__loader");

async function fetchData() {
    try {
        loader.style.display = "block";

        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const data = await res.json();
        
        loader.style.display = "none";

        return data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

button.addEventListener("click", async () => {
    try {
        const data = await fetchData();
        if (data) {
            data.forEach(cat => {
                let elem = `<img src="${cat.url}"></img>`;
                wrap.innerHTML += elem;
            });
        }
    } catch (err) {
        console.error(err.message);
    }
});
