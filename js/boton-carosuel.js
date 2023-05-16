const carousel = document.querySelector(".carosuel");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {

    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {

    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;

}

const dragStop = () => {
    isDragStart = true;
}