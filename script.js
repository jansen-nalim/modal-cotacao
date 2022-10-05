function openModal(person) {
    const getDiv = document.querySelector('.card')
    const getContentModal = document.querySelector('.content-modal')
    const modalOverlay = document.querySelector('.overlay-modal')
    .classList.add('active')

    if (person === 'person1') {
        document.querySelector('#title-modal').innerHTML = 'TOMAR NO CU EM' + ' Lucas'
        console.log('person1')
    } else if (person === 'person2') {
        document.querySelector('#title-modal').innerHTML = 'TOMAR NO CU 2'
        console.log('person2')
    } 
}

function closeModal() {
    const modalOverlay = document.querySelector('.overlay-modal')
    .classList.remove('active')
}