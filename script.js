
// LIVE CLOCK + DATE

const quotes = [
"Discipline beats motivation.",
"Success comes from consistency.",
"Small steps every day lead to big results.",
"Dream big. Study harder.",
"Stay focused. Your future is watching."
];

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString("en-IN",{
hour:"2-digit",
minute:"2-digit",
second:"2-digit"
});

document.getElementById("date").innerHTML =
now.toLocaleDateString("en-IN",{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
});

let h = now.getHours();

let status = document.getElementById("status");

if(h>=23 || h<11){

status.innerHTML="🔴 LIVE NOW";
status.style.background="#ff2d55";

}else{

status.innerHTML="⚫ OFF TIME";
status.style.background="#555";

}

}

setInterval(updateClock,1000);

updateClock();

let i=0;

setInterval(()=>{

i++;

document.getElementById("quote").innerHTML =
quotes[i%quotes.length];

},5000);
