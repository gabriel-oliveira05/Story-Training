const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item') //com o "ALL" podemos buscar todos os itens que tem a classe "item"
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers') //quando nao tem o "ALL" é porque vou pegar somente uma classe
const container = document.querySelector('.container')



let active = 0; // mapear quem vai estar ativo ou não 
const total = items.length; //o length fala quantos itens tem dentro dessa "caixa" "matriz"

let timer;


function update(direction) {
    // 1. Remove classes ativas
    const currentItem = document.querySelector('.item.active');
    const currentDot = document.querySelector('.dot.active');
    
    if (currentItem) currentItem.classList.remove('active');
    if (currentDot) currentDot.classList.remove('active');


   // 2. Calcula novo índice
    if (direction > 0) {
        active = (active + 1) >= total ? 0 : active + 1;
    } else {
        active = (active - 1) < 0 ? total - 1 : active - 1;
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2, '0')

        // --- NOVA LÓGICA DE BACKGROUND ---
    const bgColor = items[active].getAttribute('data-background')
    container.style.backgroundColor = bgColor
    // ----------------------------------

    startAutoPlay(); // Reinicia o contador de 8s sempre que mudar

}


    function startAutoPlay(){
    clearInterval(timer)  //zera o timer 
      timer = setInterval(() => {
        update(1)
    }, 5000);
    }


startAutoPlay();

prevButton.addEventListener('click', function() {
   update(-1)
})

nextButton.addEventListener('click', function() {
    update(1)
})