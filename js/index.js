// Your code goes here
const aLinks = document.querySelectorAll('.nav-link');

aLinks.forEach((item, i) => {
    item.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
    })

    item.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'black';
    })
})

// aLinks.addEventListener('mouseover', (event) => {
//      event.target.style.backgroundColor = 'blue';
//      event.target.style.color = "white";
//     });