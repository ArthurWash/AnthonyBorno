let carouselInnerDiv = document.querySelector('.carousel-inner');

// Fetch the list of image filenames from the PHP script
fetch('https://anthonyborno.com/get-images.php') // Make sure to replace this with the URL of your PHP script
  .then(response => response.json())
  .then(images => {
    // Now 'images' is an object where the values are filenames of images
    // You can use this array to generate your carousel items

    console.log(images);
    Object.values(images).forEach((image, index) => {
        let carouselItemDiv = document.createElement('div');
        carouselItemDiv.className = 'carousel-item';
        if(index === 0) {
            carouselItemDiv.classList.add('active');
        }

        let imgElement = document.createElement('img');
        imgElement.src = 'https://anthonyborno.com/carousel/' + image;
        imgElement.className = 'd-block mx-auto img-fluid';
        imgElement.alt = 'Image ' + (index + 1);

        carouselItemDiv.appendChild(imgElement);
        carouselInnerDiv.appendChild(carouselItemDiv);
    });
  });