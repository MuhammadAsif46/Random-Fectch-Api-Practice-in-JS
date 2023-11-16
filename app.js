// Random Fetch Api Practice in JS:

let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((value)=>{
    return value.json();
}).then((contests)=>{
    console.log(contests);
    let cards = ""
    for (let item in contests) {
        // console.log(contests[item]);
        cards += `
        <div class="card" style="width: 22rem;">
            <img src="./coding.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${contests[item].name} </h5>
              <p class="card-text"> Status is : ${contests[item].status} and site is : ${contests[item].site} </p>
              <p class="card-text"> in 24_hours? ${contests[item].in_24_hours}</p>
              <p>Start at : ${contests[item].start_time} </p>
              <p>End at : ${contests[item].end_time} </p>
              <a href="${contests[item].url}" target="_blank"  class="btn btn-primary">Visit Here</a>
            </div>
          </div>
        `
        
    }
    let allCards = document.getElementById('allCards');
    allCards.innerHTML += cards
})
