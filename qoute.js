const searchBtn=document.getElementById("search");
let result=document.getElementById("result");
searchBtn.addEventListener("click",()=>{
    fetch('https://animechan.vercel.app/api/random')
    .then((response) => response.json())
    // .then(quote => console.log(quote.anime,quote.quote,quote.character))
    .then((quote) => {
        console.log(quote.anime,quote.quote,quote.character)
    
    result.innerHTML=`<div class="wrapper">

               <div class="wrapper">
               <h4>Anime:</h4>
               <span>${quote.anime}</span>
               </div>
            
               <div class="wrapper">
               <h4>Quote:</h4>
               <span>"${quote.quote}"</span>
        </div>
               
       

            <div class="wrapper">
            <h4>Character:</h4>
            <span>${quote.character}</span>
        </div>
     
    
            </div>`
});    
});    



// result.innerHTML=``
