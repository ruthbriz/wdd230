const imagestoLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};

const loadImages = (images) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');};
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
        }
    });
}, imgOptions);
imagestoLoad.forEach((img) => {
observer.observe(img);
});
} else{
    imagestoLoad.forEach((img) => {
     loadImages(img);
    });
}