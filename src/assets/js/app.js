window.onload = function () {


  const Svg =()=>{
    let x = [".svg"];
    x.forEach(item => {
      $(item).each(function() {
        let $img = $(this);
        let imgClass = $img.attr("class");
        let imgURL = $img.attr("src");
        $.get(imgURL, function(data) {
          let $svg = $(data).find("svg");
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          $svg = $svg.removeAttr("xmlns:a");
          if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
          }
          $img.replaceWith($svg);
        }, "");
      });
    });
  }
  // Svg()



  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.mobile-menu');
  let menuLinks = menu.querySelectorAll('.mobile-menu__link');


  burger.addEventListener('click', function () {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('mobile-menu--active');
      document.body.classList.toggle('stop-scroll');
  });

  menuLinks.forEach(function (el) {
      el.addEventListener('click', function () {
          burger.classList.remove('burger--active');
          menu.classList.remove('mobile-menu--active');
          document.body.classList.remove('stop-scroll')
      })
  });


}
