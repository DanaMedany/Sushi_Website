// dark-mode
const toggleDark = document.querySelector("#toggleDark");
const body = document.querySelector("body");
const footer = document.querySelector("footer");


toggleDark.addEventListener('click', () => {
  const isDark = toggleDark.classList.contains("bi-moon-fill");
  toggleDark.classList.toggle("bi-moon-fill", !isDark);
  toggleDark.classList.toggle("bi-brightness-high-fill", isDark);

    toggleDark.style.paddingLeft = '720px';
    body.style.setProperty("color" , isDark ? '#000' : '#fff');
    body.style.setProperty("background" , isDark ? '#fff' : '#000');
    footer.style.setProperty("color" , isDark ? '#000' : '#fff');
    footer.style.setProperty("background" , isDark ? '#fff' : '#000');
    body.style.transition = '2s' ;
  
});



let form = document.querySelector('form');

// function for sending messages to gmail
function sendMsg(d) {
  d.preventDefault();

  let msg = document.getElementById('message').value;
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "dandonamohammed110@gmail.com",
    Password : "5E06CDDA20F5A2F61704C458451E70A3B3F1",
    To : 'dandonamohammed110@gmail.com',
    From : "dandonamohammed110@gmail.com",
    Subject : "Demo Email",
    Body : "name: " + name + '<br/> email: ' + email + '<br/> msg: ' + msg   
}).then(
  message => alert(message)
);
}

form.addEventListener("submit", sendMsg);



// validation form
function validation() {

  let userName = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;
  let error = document.querySelector('.error');

  if ((userName.length <= 4)) {
    error.innerHTML="Please enter valid username";
    return false;
  }
  if ((email.indexOf("@") === -1)){
    error.innerHTML="Please enter valid email address";
    return false;
  }
  if (message.length <= 6){
    error.innerHTML="Please enter valid message";
    return false;
  }
  else{
    alert("information has be send to your email address")
    return true;
  }
}


// making animation while scrolling
const hidden = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else {
      entry.target.classList.remove('show');
    }
  });
});

hidden.forEach((el) => observer.observe(el));


// mange the date 

const icon = document.getElementById('icon');
icon.addEventListener('click', () =>{
  const hours = document.getElementById('hrs');
  const minutes = document.getElementById('min');
  const second = document.getElementById('sec');
  const date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  
  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  second.innerHTML = sec;
  const dateContent = document.getElementsByClassName('date-content');

  if (dateContent[0].classList.contains('hide')) {
    dateContent[0].classList.remove('hide');
    dateContent[0].classList.add('show');
  } else {
    dateContent[0].classList.remove('show');
    dateContent[0].classList.add('hide');
  }
  
})
setInterval(icon, 10);



