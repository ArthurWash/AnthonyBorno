// Configuring the lightbox options
lightbox.option({
    'resizeDuration': 0
});

/* Gallery Setup */
function loadGallery(galleryId) {
    // Make a GET request to retrieve the gallery images from the server
    $.getJSON('https://anthonyborno.com/get-gallery-images.php?gallery=' + galleryId, function(images) {
            var $gallery = $('#' + galleryId);
            // Iterate over each image in the response
            $.each(images, function(i, image) {
                    // Create a link element with the image URL as the href attribute
                    var $link = $('<a>')
                            .attr('href', 'https://anthonyborno.com/' + image.original)
                            .attr('data-lightbox', galleryId);
                    // Create an image element with the image URL as the src attribute
                    var $img = $('<img>').attr('src', 'https://anthonyborno.com/' + image.original)
                    // Append the image element to the link element
                    $link.append($img);
                    // Append the link element to the gallery container
                    $gallery.append($link);
            });

            // Initialize the justified gallery plugin on the gallery container
            $gallery.justifiedGallery({
                    rowHeight: 300,
                    margins: 20,
                    lastRow: 'nojustify',
            });
    });
}

// Load all galleries on the page
$('.gallery').each(function() {
        // Get the ID of each gallery
        var galleryId = $(this).attr('id');
        // Call the loadGallery function for each gallery
        loadGallery(galleryId);
});