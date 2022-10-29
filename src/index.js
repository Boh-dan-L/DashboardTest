import './styles/index.scss';

// button namber onClick

document.querySelectorAll('.btn-click').forEach((el) => {
    el.addEventListener('click', (event) => {


        if(event.target.classList.contains('btn-active')) {
            event.target.classList.remove('btn-active')
        } else {
            document.querySelectorAll('.btn-click').forEach((el) => el.classList.remove('btn-active'))
            event.target.classList.add('btn-active')
        }
    })
})


// acordeon user content on mobile version

document.querySelectorAll('.users-mob__name-mob').forEach((el) => {
    el.addEventListener('click', (event) => {

        let acord = el.nextElementSibling;
        console.log(acord)

        if(acord.style.maxHeight) {
            document.querySelectorAll('.users-mob__info-mob').forEach((el) => el.style.maxHeight = null)
            event.target.classList.remove('arrow-on')
        } else {
            document.querySelectorAll('.users-mob__info-mob').forEach((el) => el.style.maxHeight = null)
            acord.style.maxHeight = acord.scrollHeight + 'px'
            event.target.classList.add('arrow-on')
        }
    })
})



