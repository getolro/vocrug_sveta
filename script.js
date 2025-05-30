const divwork = document.querySelectorAll('div p');


function mouseOver(e) {
    e.target.classList.add('hover')
}

function mouseLiver(e) {
    e.target.classList.remove('hover')
}

function clicker(e) {
    modal.style.display = 'block';
}

console.log(divwork)

for (let index = 0; index < divwork.length; index++) {
    debugger
    divwork[index].addEventListener('mouseover', mouseOver)
    divwork[index].addEventListener('mouseleave', mouseLiver);
    divwork[index].addEventListener('click', clicker);
}