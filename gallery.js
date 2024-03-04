// Configuring the lightbox options
lightbox.option({
  'resizeDuration': 0
});

/* Gallery Setup */
function loadGallery(galleryId) {
  $.getJSON('https://anthonyborno.com/get-gallery-images.php?gallery=' + galleryId, function(images) {
      var $gallery = $('#' + galleryId);
      $.each(images, function(i, image) {
          var $link = $('<a>')
              .attr('href', 'https://anthonyborno.com/' + image.original)
              .attr('data-lightbox', galleryId);
          var $img = $('<img>').attr('src', 'https://anthonyborno.com/' + image.original)
          $link.append($img);
          $gallery.append($link);
      });

      $gallery.justifiedGallery({
          rowHeight: 300,
          margins: 20,
          lastRow: 'nojustify',
      });
  });
}

// Load all galleries on the page
$('.gallery').each(function() {
    var galleryId = $(this).attr('id');
    loadGallery(galleryId);
});