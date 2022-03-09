const containerEL = document.getElementById('container');
const cards_lenght = 16;
const cards = [];

let perviousShownCard = undefined;

let icons = [
    'book',
    'air-freshener',
    'palette',
    'mug-hot',
    'coins',
    'igloo',
    'cog',
    'life-ring',
]

icons.push(...icons);

for(let i = 0; i <100; i++) {
    const idx1 = Math.floor(Math.random () * icons.length);
    const idx2 = Math.floor(Math.random () * icons.length);

    const temp = icons[idx1];
    icons[idx1] = icons[idx2];
    icons[idx2] = temp;
}

alert("boshlandi")


for(let i = 0; i < cards_lenght; i++) {
    const cardEL = document.createElement('div');
    cardEL.classList.add('card');
    cardEL.innerHTML = `
        <div class="front">
            <i class="fas fa-${icons[i]}"> </i>
        </div>
        <div class="back"><small>Click me </small></div>
    `
    cardEL.addEventListener('click', () =>{
        if(!cardEL.classList.contains('show')) {
            cardEL.classList.add('show');
        }
        
        if(!perviousShownCard) {
            perviousShownCard = cardEL
        } else {
            const iconOne = perviousShownCard.querySelector('i').classList[1];

            const iconTwo = cardEL.querySelector('i').classList[1];

            if(iconOne !== iconTwo) {
                const temp = perviousShownCard;
                setTimeout(() => {
                    temp.classList.remove('show');
                    cardEL.classList.remove('show');
                }, 1000)
            }
            perviousShownCard = undefined;
        }

    })

    cards.push(cardEL);

    containerEL.appendChild(cardEL);
}