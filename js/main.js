let checkerInput = document.querySelector('.checker__input');
let checkerButton = document.querySelector('.checker__button');
let out = document.querySelector('.out');

function checkDivides() {
    let numbers = [10, 5, 2, 9, 3];
    let html = '';
    for (let i = 0; i < numbers.length; i++) {
        if (checkerInput.value % numbers[i] == 0) {
            html +=
                `
               <p>${checkerInput.value} can be divided on: ${numbers[i]}</p>
            `;
        } else {
            html +=
                `
               <p>${checkerInput.value} can NOT be divided on: ${numbers[i]}</p>
            `;
        }
    }
    out.innerHTML = html;
    html = '';
}
checkerButton.addEventListener('click', function () {
    checkDivides();
})