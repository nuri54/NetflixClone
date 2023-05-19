function scrollL(toScroll) {
    const movieSlider = document.querySelector(toScroll);
    movieSlider.scrollBy({ left: -800, behavior: 'smooth' });
}


function scrollR(toScroll) {
    const movieSlider = document.querySelector(toScroll);
    movieSlider.scrollBy({ left: 800, behavior: 'smooth' });
}
