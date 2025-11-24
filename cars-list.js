function toggleCars(card) {
    const allCards = document.querySelectorAll('.branches-cars');
    allCards.forEach(c => {
        if (c !== card){
            c.querySelector('.branches-cars-title').classList.remove('active');
            c.querySelector('.car-list').classList.remove('active');
        }
    });
    card.querySelector('.branches-cars-title').classList.toggle('active');
    card.querySelector('.car-list').classList.toggle('active');
}