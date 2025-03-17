


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
            <button class="btn  btn-outline btn-info">Lesson-${res.level_no}</button>
        `
        learn_categories.append(random_button);
        console.log(data);
            
        }
    
}

loadCategory()



