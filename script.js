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
    if (monthly[0].style.display == 'none') {
        monthly.forEach((item) => {
            item.style.display = 'block';

        })
        yearly.forEach((item) => {
            item.style.display = 'none';
        })
    }
    else {
        yearly.forEach((item) => {
            item.style.display = 'block';
        })
        monthly.forEach((item) => {
            item.style.display = 'none';
        })
    }
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

const prevBtn = document.querySelectorAll('.prev');
const nextBtn = document.querySelectorAll('.next');


prevBtn.forEach((item) => {

    item.addEventListener('click', () => {

        const rev1 = document.querySelector('#rev1');
        const rev2 = document.querySelector('#rev2');
        const rev3 = document.querySelector('#rev3');

        if (rev2.style.display == 'none' && rev3.style.display == 'none') {
            rev3.style.display = 'block';
            rev2.style.display = 'none';
            rev1.style.display = 'none';
        }
        else if (rev1.style.display == 'none' && rev3.style.display == 'none') {
            rev1.style.display = 'block';
            rev2.style.display = 'none';
            rev3.style.display = 'none';
        }
        else{
            rev2.style.display = 'block';
            rev1.style.display = 'none';
            rev3.style.display = 'none';
        }

    })

})


nextBtn.forEach((item) => {

    item.addEventListener('click', () => {

        const rev1 = document.querySelector('#rev1');
        const rev2 = document.querySelector('#rev2');
        const rev3 = document.querySelector('#rev3');

        if (rev2.style.display == 'none' && rev3.style.display == 'none') {
            rev2.style.display = 'block';
            rev1.style.display = 'none';
            rev3.style.display = 'none';
        }
        else if (rev1.style.display == 'none' && rev3.style.display == 'none') {
            rev3.style.display = 'block';
            rev2.style.display = 'none';
            rev1.style.display = 'none';
        }
        else{
            rev1.style.display = 'block';
            rev2.style.display = 'none';
            rev3.style.display = 'none';
        }

    })

})

//--------------------------------------------------
