const images = document.querySelectorAll('img[data-src]');

function preloadImage(img){
    const src = img.getAttribute("data-src");
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0"
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