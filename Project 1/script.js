 //varibales
 let btn = document.querySelector('#new-quote')
 let quote = document.querySelector('.quote')
 let person = document.querySelector('.person')

 const quotes = [{
    quote: "The best way to find yourself is to lose yourself in the service of others",
    person: "Mahatma Gandhi"
 }, {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela  "
 },{
    quote: "The way to get started is to quit talking and begin doing.",
    person: "  Walt Disney"
 },{
    quote: " Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    person: "Steve Jobs  "
 },{
    quote: "If life were predictable it would cease to be life, and be without flavor. ",
    person: "  Eleanor Roosevelt"
 },{
    quote: " Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "  Mother Teresa"
 },{
    quote: " When you reach the end of your rope, tie a knot in it and hang on",
    person: "  Franklin D. Roosevelt"
 },{
    quote: " Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    person: "  Benjamin Franklin"
 },{
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    person: "Helen Keller  "
 },{
    quote: "  Whoever is happy will make others happy too",
    person: "Anne Frank  "
 }]

 btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
 })