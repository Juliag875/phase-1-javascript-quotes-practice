fetchQuotes()
const quoteList = document.querySelector('#quote-list')

function fetchQuotes() {
   fetch('http://localhost:3000/quotes?_embed=likes')
   .then(res => res.json())
   .then(data => data.forEach(quotes => postQuotes(quotes)))
 }

 function postQuotes(quotes){
   const li = document.createElement('li')
   li.innerHTML = `
   <li class='quote-card'>
   <blockquote class="blockquote">
     <p class="mb-0">${quotes.quote}</p>
     <footer class="blockquote-footer">${quotes.author}</footer>
     <br>
     <button class='btn-success'>Likes:<span>0</span></button>
     <button class='btn-danger'>Delete</button>
   </blockquote>
 </li>`
 quoteList.append(li)
 }