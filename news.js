let country = 'in';
let apikey = '49c8dd330b15407bb0d570c3aaafeff3';

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);
xhr.onload = function(){
    if (this.status===200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index) {
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse${index}"
                  aria-expanded="true"
                  aria-controls="collapse${index}"
                >
                  <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
              </h2>
            </div>
  
            <div
              id="collapse${index}"
              class="collapse show"
              aria-labelledby="heading${index}"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                ${element["content"]}.<a href="${element['url']}" target="_blank"> Read More </a>
              </div>
            </div>
          </div>`;
          newsHtml += news;
        });  
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log('Some Error Occured')
    }
}
xhr.send();