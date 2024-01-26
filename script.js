let images = ['Pic1.jpg', 'Pic2.jpg', 'Pic3.jpg', 'Pic4.jpg', 'Pic5.jpg', 
    'Pic6.jpg', 'Pic7.jpg', 'Pic8.jpg', 'Pic9.jpg', 'Pic10.jpg', 
    'Pic11.jpg', 'Pic12.jpg', 'Pic13.jpg', 'Pic14.jpg', 'Pic15.jpg',
    'Pic16.jpg', 'Pic17.jpg', 'Pic18.jpg', 'Pic19.jpg', 'Pic20.jpg',
    'Pic21.jpg', 'Pic22.jpg', 'Pic23.jpg', 'Pic24.jpg', 'Pic25.jpg',
    'Pic26.jpg', 'Pic27.jpg', 'Pic28.jpg', 'Pic29.jpg', 'Pic30.jpg',
    'Pic31.jpg', 'Pic32.jpg', ]; // To add a photo, name the image file in this format: Picx.jpg. Simply copy this code here: 'Picx.jpg', to the array, and replace 'x' with the image number.

let carouselInnerDiv = document.querySelector('.carousel-inner');

images.forEach((image, index) => {
    let carouselItemDiv = document.createElement('div');
    carouselItemDiv.className = 'carousel-item';
    if(index === 0) {
        carouselItemDiv.classList.add('active');
    }

    let imgElement = document.createElement('img');
    imgElement.src = './carousel/' + image;
    imgElement.className = 'd-block mx-auto img-fluid';
    imgElement.alt = 'Image ' + (index + 1);

    carouselItemDiv.appendChild(imgElement);
    carouselInnerDiv.appendChild(carouselItemDiv);
});