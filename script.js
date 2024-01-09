document.addEventListener("DOMContentLoaded", function () {
    let loading = document.querySelector(".loading");
    let container = document.querySelector(".container");
    let cards = document.querySelectorAll(".card");
    

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            console.log(card);

            document.body.innerHTML = "";

            let div = document.createElement("div");
            div.classList.add("foodDetails");
            div.innerHTML = `
                <img src="${card.firstElementChild.src}" alt="">
                <div class="detailText">
                    <h1>Eat Best with <br> जय भवानी </h1>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <button>Buy Now</button>
                    <a href="">Back</a>
                </div>`;
            document.body.appendChild(div);
        });
        
    });

    // Loading
    container.style.display = "none";
    setTimeout(function () {
        container.style.display = "block";
        loading.style.display = "none";
    }, 2000);
});