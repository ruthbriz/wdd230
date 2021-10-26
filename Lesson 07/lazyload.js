const images = document.querySelectorAll('img[data-src]');

const Loadimages = (images) =>

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 5px 0"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach(entry => {
        if (!entry.isIntersection){
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});