 // JavaScript for gallery navigation
    document.addEventListener('DOMContentLoaded', function() {
        let currentIndex = 0;
        const images = document.querySelectorAll('.gallery-container img');
        const totalImages = images.length;
        /*above gets all the images in the container*/ 
        /*below is a forloop for the images*/
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }
        /*prev button to go to previous image */
        document.querySelector('.prev').addEventListener('click', function() {
            currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
            showImage(currentIndex);
        });
        /*next button to go to next image */
        document.querySelector('.next').addEventListener('click', function() {
            currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
            showImage(currentIndex);
        });
    });
