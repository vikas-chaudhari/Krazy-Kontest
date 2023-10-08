let url = "https://kontests.net/api/v1/all";

let p = fetch(url).then((response) =>{return response.json()}).then((contest)=>{
    let cardContainer = document.body.getElementsByClassName("all_cards")[0];
    let ihtml = ""
    for (let item in contest){

        console.log(contest[item]);
        ihtml = 
        `<div class="card" id="Card">
            <div class="card_image">
                <img src="./images/card_img.jpg" alt="">
            </div>

            <div class="info">
                <p><span>Duration : </span>${contest[item].duration}</p>
                <p><span>End Time : </span>${contest[item].end_time}</p>
                <p><span>In 24 hours : </span>${contest[item].in_24_hours}</p>
                <p><span>Name : </span>${contest[item].name}</p>
                <p><span>Site : </span>${contest[item].site}</p>
                <p><span>Start Time : </span>${contest[item].start_time}</p>
                <p><span>Status : </span>${contest[item].status}</p>
            </div>

            <div class="btn"> 
                <button>
                    <a href="${contest[item].url}">Go To Contest</a>
                </button>
            </div>
        </div> `

        cardContainer.innerHTML += ihtml;
    }


});




/* -----------------------------API DATA FORMAT------------------------------------
    duration : "5097540.0"
    end_time : "2023-09-07T06:59:00.000Z"
    in_24_hours : "No"
    name : "Koinos Supercharger Event (Calling All Coders!)"
    site : "HackerEarth"
    start_time : "2023-07-10T07:00:00.000Z"
    status : "CODING"
    url : "https://koinos.hackerearth.com/de/"
*/

