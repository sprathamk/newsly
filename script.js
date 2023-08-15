async function getNews() {
    return await fetch("https://newsdata.io/api/1/news?country=in&apikey=pub_276697b0e21f7b6a659c19404eaa8fed19626")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") return;
            const head = data.results;

            if (!head) return [];

            const relevantNews = head.map(news => `${news.title}. <br/>${news.pubDate}`);
            const relevant = relevantNews.slice(0, 3);
            console.log({ relevant });

            document.getElementById("headline").innerHTML = relevant.map(news => `<li> ${news} </li>`).join('');

            return relevant;
        })
        .catch(e => console.log(e));
}
getNews();