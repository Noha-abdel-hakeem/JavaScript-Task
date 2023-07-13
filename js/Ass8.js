var quotes = [
   `"Do not take life too seriously. You will not get out alive."
   --Elbert Hubbard` ,
   
   `"The best revenge is massive success."
   --Frank Sinatra`, 
   
   `“Learn as if you will live forever, live like you will die tomorrow.” 
   — Mahatma Gandhi`,

   `“Opportunity is missed by most people because it is dressed in overalls and looks like work.” 
   — Thomas Edison`,

   `“I never dreamed about success. I worked for it.” 
   --Estée Lauder`,

   `"You miss 100% of the shots you don't take."
   --Wayne Gretzy`,
];


function newQuotes(){
             //  to nearest small integar  to be random   to be from 0 to the length of array
    var randomNumber= Math.floor (Math.random() * (quotes.length));
    document.getElementById("displayQuotes").innerHTML=quotes[randomNumber];
}