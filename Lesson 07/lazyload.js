const images = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 5px 0px"
};

const loadImages = (images) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('date-src');};
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((images, observer) => {
    items.forEach((item) => {
    })
}, imgOptions);

imagestoLoad.forEach((img) => {
imgObserver.observer(img);
});
}
else{
    imagestoLoad.forEach((img) => {
     loadImages(img);
    });
}