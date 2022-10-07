let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const stepSec = document.getElementsByClassName("box");
const subBtn = document.querySelector("#frmButton");
console.log(stepSec);
let secs = [ "order", "popular", "gallery", "review", "speciality","home"];


document.addEventListener("DOMContentLoaded", () => {
  let clr = ["orange", "#2a2a9a", "#3a3833", "#1f5306"];
  let r = parseInt(Math.random() * 10) % secs.length;

  let sec = secs[r];
  let c = parseInt(Math.random() * 10) % clr.length
  console.log(r, c);
  document.querySelector("." + sec).style.backgroundColor = clr[c];
  for (let i = 0; i < stepSec.length; i++){
    stepSec[i].style.color = clr[c];
  }
  // document.querySelector("#" + sec).style.color = clr[parseInt(Math.random() * 10) % clr.length];
})

// stepSec.forEach(element => {
//   let clr = ["orange", "#2a2a9a", "yellow", "#1a7506"];
//   let c = parseInt(Math.random() * 10) % clr.length;
//   element.style.color = clr[c];
// });



searchButton.addEventListener('click', () => {
  let value = searchInput.value;
  value = value.toLowerCase().trim();
  if (secs.includes(value)) {
    const section = document.querySelector("." + value).offsetTop;
    console.log(section);
    window.scrollTo({ top:section })
    
  }
  searchInput.value = ""; 
})

menu.onclick = () => {

menu.classList.toggle('fa-times');
navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}




window.onload = fadeOut();

makeRequest();


// function setRandomTickerColors() {
//   const tickerContainer = document.getElementsByClassName(".ticker-item");
//   let clr = ["orange", "#2a2a9a", "#1fad", "#ffac", "#aafc", "#bbcd"];
//  // let c = parseInt(Math.random() * 10) % clr.length;
//   console.log(tickerContainer);
//   for (let i = 0; i < tickerContainer.length; i++) {
//     let c = parseInt(Math.random() * 10) % clr.length;
//     console.log(c);
//     tickerContainer[i].style.backgroundColor = clr[c];
//     tickerContainer[i].style.color = "white";

//   }
// }

async function makeRequest() {
  const tickerSec = document.querySelector(".ticker-transition");

  httpRequest =  new XMLHttpRequest();

  if (!httpRequest) {
    alert("Giving up :( Cannot create an XMLHTTP instance");
    return false;
  }
  
 
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const dt = JSON.parse(httpRequest.responseText.toString());
        
        dt.forEach(d => {
          tickerSec.innerHTML += "<div class='ticker-item'>" + d.title + "</div>";
        })
    
     
       
      } else {
        alert("There was a problem with the request.");
      }
    }
  };
  httpRequest.open("GET", "https://jsonplaceholder.typicode.com/users/1/posts");
   httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
}
subBtn.addEventListener("click", SubmitHandler);

function SubmitHandler(e) {
e.preventDefault();
  const name = document.querySelector("#frmtext");
  const mail = document.querySelector("#frmail");
  const frmno = document.querySelector("#frmno");
  const frmfood = document.querySelector("#frmfood");
  const frmaddr= document.querySelector("#frmaddr");
  // const data = {
  //   name: name,
  //   email: mail,
  //   phoneNumber: frmno,
  //   foodItem:frmfood,
  // }

  window.localStorage.setItem("userName", name.value);
  window.localStorage.setItem("userMail", mail.value);
  window.localStorage.setItem("userNo", frmno.value);
  window.localStorage.setItem("userFood", frmfood.value);
  window.localStorage.setItem("userAddress", frmaddr.value);
 
  
  name.value = "";
  mail.value = "";
  frmno.value = "";
  frmfood.value = "";
  frmaddr.value = "";


  console.log(window.localStorage.getItem("userName"));

}

