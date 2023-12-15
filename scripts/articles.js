async function fetchData() {
    const URL = getRandomUrl();
    try {
        const fetchResult = fetch(URL);
        const response = await fetchResult;
        return await response.json()
    } catch (e) {
        throw Error(e);
    }
}

function hideLoader() {
    let loader = document.getElementsByClassName("loader-container")[0]
    loader.style.display = 'none';
}


function getRandomUrl() {
    return `https://jsonplaceholder.typicode.com/posts?_start=${Math.floor(Math.random() * 10)}&_limit=4`
}

async function createArticlesBlock() {
    try {
        let articles = await fetchData();
        let template = document.getElementById("article-template");

        articles.forEach(article => {
            let content = template.content.cloneNode(true);
            let articleTitle = content.querySelector(".article-title");
            let articleBody = content.querySelector(".article-body");
            articleTitle.textContent = article.title;
            articleBody.textContent = article.body;
            let block = document.querySelector(".articles-content");
            block.appendChild(content);
        });

        hideLoader();
    } catch {
        hideLoader();
        let block = document.querySelector(".articles-content");
        block.innerHTML = "⚠ Что-то пошло не так"
    }


}


window.addEventListener("load", async () => {
    await createArticlesBlock()
})






