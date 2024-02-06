lightbox.option({
    'resizeDuration': 0
  });
  
  /* Gallery Setup */
  $.getJSON('https://anthonyborno.com/get-gallery-images.php', function(images) {
      var $gallery = $('#my-gallery');
      $.each(images, function(i, image) {
        var $link = $('<a>')
          .attr('href', 'https://anthonyborno.com/' + image.original)
          .attr('data-lightbox', 'my-gallery');
        var $img = $('<img>').attr('src', 'https://anthonyborno.com/' + image.thumbnail);
        $link.append($img);
        $gallery.append($link);
      });
    
      $gallery.justifiedGallery({
        rowHeight: 300,
        margins: 20,
        lastRow: 'nojustify',
      }).on('jg.complete', function () {
        $('#my-gallery img').css('border-bottom', '20px solid transparent');
      });
  });