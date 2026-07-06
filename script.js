let quotes = ["'You miss 100% of the shots you don't take.'", "'We can't become what we need to be by remaining what we are.'", "'It does not matter how slowly you go as long as you do not stop.'", "'Life is like riding a bicycle. To keep your balance, you must keep moving.'", "'The only thing we have to fear is fear itself.'", "'The greatest glory in living lies not in never falling, but in rising every time we fall.'", "'Whether you think you can or think you can't, you're right.'", "'The two most important days in your life are the day you are born and the day you find out why.'", "'Each day provides its own gifts.'", "'Step by step and the thing is done.'"];

const quote = document.querySelector("#quote");
const Btn = document.querySelector("#Btn");
let lastIndex = -1;

function diplayRandomQuotes(){
    
    let randomIndex = Math.floor(Math.random() * quotes.length);

    while (randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    quote.innerText = quotes[randomIndex];

    lastIndex = randomIndex;
}

Btn.addEventListener("click", () =>{
    diplayRandomQuotes();
});