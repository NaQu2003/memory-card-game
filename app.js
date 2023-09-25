const cardArray = [
    {
        name: 'AS-PIK',
        img: 'cards/Card1.png'
    },
    {
        name: 'TWO-PIK',
        img: 'cards/Card2.png' 
    },
    {
        name: 'THREE-PIK',
        img: 'cards/Card3.png' 
    },
    {
        name: 'AS-KARO',
        img: 'cards/Card4.png' 
    },
    {
        name: 'TWO-KARO',
        img: 'cards/Card5.png' 
    },
    {
        name: 'THREE-KARO',
        img: 'cards/Card6.png' 
    },
    {
        name: 'AS-PIK',
        img: 'cards/Card1.png'
    },
    {
        name: 'TWO-PIK',
        img: 'cards/Card2.png' 
    },
    {
        name: 'THREE-PIK',
        img: 'cards/Card3.png' 
    },
    {
        name: 'AS-KARO',
        img: 'cards/Card4.png' 
    },
    {
        name: 'TWO-KARO',
        img: 'cards/Card5.png' 
    },
    {
        name: 'THREE-KARO',
        img: 'cards/Card6.png' 
    },
]
const grid = document.querySelector('.grid')
let cardsChosen = [];
let cardsChosenIds = [];
let score = 0;
let mistakes = 0;
const mistakesResult = document.querySelector('.mistakes-result')
createBoard();
cardArray.sort(() => 0.5 - Math.random());
function createBoard(){
    for(let i = 0 ;i<cardArray.length;i++){
      const card =  document.createElement('img');
       card.setAttribute('src','cards/Blank.png')
       card.setAttribute('data-id',i)
       card.addEventListener('click',flipCard)
       grid.append(card);
       
       
    }
}
const cards = document.querySelectorAll('img')
function checkMatch(){
  
    if(cardsChosenIds[0]===cardsChosenIds[1]){
        cardsChosen = [];
        cards[cardsChosenIds[0]].setAttribute('src','cards/Blank.png')

        alert('Wybrałeś to samo ;/')
       
    }
    else if(cardsChosen[0] ===cardsChosen[1]){
        const scoreResult = document.querySelector('.score-result')
        
        cards[cardsChosenIds[0]].setAttribute('src','cards/Found.png')
        cards[cardsChosenIds[1]].setAttribute('src','cards/Found.png')
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        score++;
        scoreResult.innerHTML = `${score}`

    }else{
        cards[cardsChosenIds[0]].setAttribute('src','cards/Blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','cards/Blank.png')
        mistakes++;
        mistakesResult.innerHTML = `${mistakes}`
    }
    cardsChosen = [];
    cardsChosenIds = [];
    if(score===6){
        alert("Gratki, znalazłeś wszystkie")
        window.location.reload();
    }
    if(mistakes ===10){
        window.location.reload();
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosenIds.push(cardId);
    
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src',`${cardArray[cardId].img}`)
    if(cardsChosen.length>2){
        for(let i = 0;i<cardsChosen.length;i++){
           cards[cardsChosenIds[i]].setAttribute('src',`cards/Blank.png`)
         
        }
    }
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500)

    }
    
}
