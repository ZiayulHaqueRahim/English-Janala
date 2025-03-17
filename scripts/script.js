
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;



const loadCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res =>  res.json())
    .then(data =>{

         showCategory(data.data);
       
        
    })
}

const showCategory = (data) =>{
        
    const learn_categories = document.getElementById('learn-categories');
    for (const res of data) {
       
        const random_button = document.createElement('button');
     
        random_button.innerHTML= `
            <button id="button-${res.id}" class="btn   btn-outline btn-info">Lesson-${res.level_no}</button>
        `
        learn_categories.append(random_button);

        
        }
    document.getElementById('start-info').classList.add('inline');



     const btn1 = document.getElementById('button-101');
     const btn2 = document.getElementById('button-102');
     const btn3 = document.getElementById('button-103');
     const btn4 = document.getElementById('button-104');
     const btn5 = document.getElementById('button-105');
     const btn6 = document.getElementById('button-106');
     const btn7 = document.getElementById('button-107');

     btn1.addEventListener('click', ()=>{
         counter1 = counter1 + 1;
        
        fetch('https://openapi.programming-hero.com/api/level/1')
        .then(res => res.json())
        .then(result => detailsShow(result));
        
     })
     btn2.addEventListener('click', ()=>{
        counter2 = counter2 + 1;
        fetch('https://openapi.programming-hero.com/api/level/2')
        .then(res => res.json())
        .then(result => detailsShow(result));
        
     })
     btn3.addEventListener('click', ()=>{
        counter3 = counter3 + 1;
        fetch('https://openapi.programming-hero.com/api/level/3')
        .then(res => res.json())
        .then(result => detailsShow(result));
        
     })
     btn4.addEventListener('click', ()=>{
        counter4 = counter4 + 1;
        fetch('https://openapi.programming-hero.com/api/level/4')
        .then(res => res.json())
        .then(result => detailsShow(result));
        
     })
     btn5.addEventListener('click', ()=>{
        counter5 = counter5 + 1;
        fetch('https://openapi.programming-hero.com/api/level/5')
        .then(res => res.json())
        .then(result => detailsShow(result));
        
     })
     btn6.addEventListener('click', ()=>{
        counter6 = counter6 + 1;
        fetch('https://openapi.programming-hero.com/api/level/6')
        .then(res => res.json())
        .then(result => detailsShow(result));
        
     })
     btn7.addEventListener('click', ()=>{
        counter7 = counter7 + 1;
        fetch('https://openapi.programming-hero.com/api/level/7')
        .then(res => res.json())
        .then(result => detailsShow(result));
        
     })
     
}




const detailsShow = (cardItem) =>{

   
   const card_element = document.getElementById("card-element");
  
   const item = cardItem.data;
   document.getElementById('start-info').classList.remove('inline');

   document.getElementById('start-info').classList.add('hidden');
   
        if(item.length == 0){
        return Empty(true);
    }
   
    for (const element of item) {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
            <div class="card-body items-center text-center py-1">
                <h2 class="card-title">${element.word}</h2>
                <p>Meaning/Pronounciation</p>
                <h4>${element.meaning} / ${element.pronounciation}</h4>
                <div class="card-actions flex gflex-row justify-between gap-2">
                    <button class="btn btn-primary">Details </button>
                    <button class="btn btn-primary">Audio</button>
                </div>
            </div>
        </div>
        `
        card_element.append(card);
    }
   

   
}

const Empty = () =>{
    const card_element = document.getElementById("card-element");
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm">
       <h5>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h5>
        
    </div>
    `
    card_element.append(card);
}



loadCategory()



//


