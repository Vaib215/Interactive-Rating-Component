let ratings = document.querySelectorAll('.rating')
let submitBtn = document.querySelector('.submit')
let sections = document.querySelectorAll('section')
let stars = document.querySelector('span')
let ratingValue = "0";

// Functions
const toggleRating = e => {
    let selectedRating = e.target
    if (selectedRating.classList.contains('selected')) {
        selectedRating.classList.remove('selected')
        submitBtn.classList.add('noHover')
        ratingValue=0
        return
    }
    ratings.forEach((rating) => {
        if (rating.classList.contains('selected')) {
            rating.classList.remove('selected')
        }
    })
    selectedRating.classList.add('selected')
    submitBtn.classList.remove('noHover')
    ratingValue = selectedRating.innerText
    return
}

const toggleState = () => {
    sections[0].classList.replace('flex','hidden')
    sections[1].classList.replace('hidden','flex')
    stars.innerText=ratingValue
}

// Event Listeners
ratings.forEach((rating) => {
    rating.addEventListener('click', toggleRating);
})

submitBtn.addEventListener('click', toggleState)