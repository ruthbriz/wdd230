const images = document.querySelectorAll('[data-src]');


const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
};

const loadImages = (images) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('date-src');};
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((images, observer) =>
    items.forEach((item) => {
    });
}, imgOptions);

imagestoLoad.forEach((img) => {
imgObserver.observer(img);
});
}
else{
    
}