const text = document.querySelector('.quote');
const character = document.querySelector('.character');

const nextBtn = document.querySelector('.next');

const getQuote = async () => {
    const res = await fetch('https://friends-quotes-api.herokuapp.com/quotes');

    const quotes = await res.json();
    const num = Math.floor(Math.random() * quotes.length);
    
    const item = quotes[num];
    const quote = item.quote;
    const characterName = item.character;

    text.innerText = quote;
    character.innerText = characterName;
    
  
}
      
     nextBtn.addEventListener('click', getQuote)

     getQuote()