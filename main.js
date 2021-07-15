const filterBtns = document.querySelectorAll('li');

const meals = document.querySelectorAll('.Food');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        meals.forEach(meal => {
            if (btn.innerText == 'All') {
                meal.classList.remove('hide')
            }
            else if (btn.innerText.toLowerCase() !== meal.getAttribute('data-type')) {
                meal.classList.add('hide')
            } else {
                meal.classList.remove('hide')
            }
        })
    })
})