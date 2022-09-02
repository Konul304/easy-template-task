function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


const toggle = document.querySelector('.toggle');
const monthly = document.querySelectorAll('.monthly');
const yearly = document.querySelectorAll('.yearly');

toggle.addEventListener('click', () => {
    monthly.forEach((item) => {
        item.style.display = 'none';
    })
    yearly.forEach((item) => {
        item.style.display = 'block';
    })
})


const read = document.querySelectorAll('.read');
const img = document.querySelectorAll('.blog a');
const more = document.querySelectorAll('.more')

img.forEach((item) => {
    item.addEventListener('mouseover', () => {
        read.forEach((a) => {
            a.style.borderColor = 'rgb(250, 127, 127)';
        })
        more.forEach((i) => i.style.visibility = 'visible')
    })
    item.addEventListener('mouseout', () => {
        more.forEach((i) => i.style.visibility = 'hidden')
    })
})

read.forEach((item) => {
    item.addEventListener('mouseover', () => {
        read.forEach((a) => {
            a.style.borderColor = 'rgb(250, 127, 127)';
        })
        more.forEach((i) => i.style.visibility = 'visible')
    })
    item.addEventListener('mouseout', () => {
        more.forEach((i) => i.style.visibility = 'hidden')
    })
})

const revButton = document.querySelectorAll('.buttons div');

revButton.forEach((item)=>{
    item.addEventListener('click',()=>{
        const pic1 = document.querySelector('#review1');
        const pic2 = document.querySelector('#review2');

        pic1.style.display='none';
        pic2.style.display='block';
    })
})