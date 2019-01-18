$(function() {
  $gallery_items = 0;
  $gallery = $(".gallery");

  $splash_image_count = 0;
  $splash_image_id = 0;

  $.getJSON("js/gallery.json", {
    format: "json"
  }).done(function(data) {
    addGalleryImages(($gallery_items = data));
  });

  function addGalleryImages(data) {
    $.each(data, function(id) {
      $gallery.append(
        '<li class="gallery-item"><img src="img/gallery/1.jfif" class="__current__img__" alt="' +
          data[id].author +
          '"><p class="gallery-item-author">' +
          data[id].author +
          '</p><p class="gallery-item-desc">' +
          data[id].desc +
          "</p></li>"
      );

      $(".__current__img__").attr("src", data[id].url);
      $(".__current__img__").removeClass("__current__img__");

      $(".gallery-item").click(function() {
        openSplashImage($(this).index());
      });
      $(".splash-close").click(function() {
        closeSplashImage();
      });

      $splash_image_count++;
    });
  }

  function openSplashImage(id) {
    $splash_image_id = id;
    $(".splash-container").css("display", "block");
    $("body").addClass("splash-active");
    $("#splash-image").attr("src", $gallery_items[$splash_image_id].url);
  }

  function closeSplashImage() {
    if ($("body").hasClass("splash-active")) {
      $splash_image_id = 0;
      $(".splash-container").css("display", "none");
      $("body").removeClass("splash-active");
    }
  }

  function nextSplashImage() {
    if (++$splash_image_id >= $splash_image_count) {
      $splash_image_id = 0;
    }

    $("#splash-image").attr("src", $gallery_items[$splash_image_id].url);
  }

  function prevSplashImage() {
    if (--$splash_image_id < 0) {
      $splash_image_id = $splash_image_count - 1;
    }

    $("#splash-image").attr("src", $gallery_items[$splash_image_id].url);
  }

  $(".splash-next").click(function() {
    nextSplashImage();
  });
  $(".splash-prev").click(function() {
    prevSplashImage();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      closeSplashImage();
    } else if (e.keyCode === 39) {
      nextSplashImage();
    } else if (e.keyCode === 37) {
      prevSplashImage();
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 3) {
      $(".nav-main").addClass("toggled");
    } else {
      $(".nav-main").removeClass("toggled");
    }
  });

  $(".nav-switcher").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
    $(".nav-items").toggleClass("active");
  });
});
