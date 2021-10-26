const images = document.querySelectorAll('img[data-src]');

function preloadImage(img){
    const src = img.getAttribute("data-src");
}

const imgOptions = {};

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

images.forEach