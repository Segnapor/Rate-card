const invoker = document.querySelector('#btn');
const rates = document.querySelectorAll('.rate');
const ratings = document.querySelector('#ratings');
const selected = document.querySelector('#selected');
const card = document.querySelector('#card');
const cardTwo = document.querySelector('#card2'); 
const invokerTwo = document.querySelector('#btn2');
const clickSubmit = document.querySelector('.press-btn');
// for all rates buttons use--- foreach.
let seer;  
   rates.forEach((rate) => {
       rate.addEventListener('click', ()=>{
        seer = rate.innerText;
         console.log(seer);
         rates.forEach((rate)=>{
        rate.classList.remove('active');
            }); 
            rate.classList.add('active');
        });
    });

    invoker.addEventListener('click', ()=>{
         if(seer) {          
        card.style.display = 'none';
        cardTwo.style.display = 'block';
        selected.innerText = seer;
        console.log(selected) ;  
   }
    else{
        card.style.display = 'block';
        invoker.textContent =  "CHOOSE RATE" ;
        invoker.style.backgroundColor = 'red';

    }
   
});
invokerTwo.addEventListener('click' , ()=>{
    cardTwo.style.display = 'none';
    card.style.display = 'block';
   
})
 