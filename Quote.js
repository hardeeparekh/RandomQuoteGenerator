
        async function Quotes(){
            const response=await fetch('https://dummyjson.com/quotes/random');
            const data=await response.json()
            document.querySelector('.quote').innerHTML=data.quote;
            document.querySelector('.author').innerHTML=data.author;
         }
         Quotes();
