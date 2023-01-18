$(document).ready(function () {

  $('#entry').click(function () {
    $.fancybox.open({
      src: '#hidden',
      type: 'inline',
    });
  });

  $('#registration').click(function () {
    $.fancybox.open({
      src: '#hidden',
      type: 'inline',
    });
  });


  const Svg = () => {
    let x = [".svg"];
    x.forEach((item) => {
      $(item).each(function () {
        let $img = $(this);
        let imgClass = $img.attr("class");
        let imgURL = $img.attr("src");
        $.get(
          imgURL,
          function (data) {
            let $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (
              !$svg.attr("viewBox") &&
              $svg.attr("height") &&
              $svg.attr("width")
            ) {
              $svg.attr(
                "viewBox",
                "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
              );
            }
            $img.replaceWith($svg);
          },
          ""
        );
      });
    });
  };
  Svg()

  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".mobile-menu");
  let menuLinks = menu.querySelectorAll(".mobile-menu__link");

  burger.addEventListener("click", function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("mobile-menu--active");
    document.body.classList.toggle("stop-scroll");
  });

  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burger.classList.remove("burger--active");
      menu.classList.remove("mobile-menu--active");
      document.body.classList.remove("stop-scroll");
    });
  });



  try {

    const certificateArr = [
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
    ]


    const diplomaArr = [
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
    ]

    const gratitudeArr = [
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
      'https://mtkrosberg.ru/upload/iblock/9f3/9f3488bdd3f5871dd8de1889a079e668.jpg',
    ]


    if (document.querySelector('.certificates-list') !== null) {

      window.addEventListener('resize', function (event) {
        createCardCertificate(certificateArr.length)
        createCardDiploma(diplomaArr.length)
        createCardGratitude(gratitudeArr.length)
        checkScreen(this.innerWidth)
      }, true);



      const checkScreen = (width) => {
        createCardCertificate()
        createCardDiploma()
        createCardGratitude()
        if (width > 1244) {
          createCardCertificate(12)
          createCardDiploma(12)
          createCardGratitude(12)
        }

        if ((width < 1244) & (width > 1043)) {
          createCardCertificate(10)
          createCardDiploma(10)
          createCardGratitude(10)
        }

        if ((width < 1043) & (width > 634)) {
          createCardCertificate(8)
          createCardDiploma(8)
          createCardGratitude(8)
        }

        if ((width < 634) & (width > 486)) {
          createCardCertificate(6)
          createCardDiploma(6)
          createCardGratitude(6)
        }

        if (width < 486) {
          createCardCertificate(4)
          createCardDiploma(4)
          createCardGratitude(4)
        }

      }




      const createCardCertificate = (count) => {
        const listCertificate = document.querySelector('.certificates-list')

        listCertificate.innerHTML = ''


        for (let i = 0; i < certificateArr.length; i++) {
          const li = document.createElement('li')
          li.classList.add('cert-page__item', 'certificate')
          const a = document.createElement('a')
          const img = document.createElement('img')
          img.src = certificateArr[i]


          if (count <= i) {
            li.classList.add('d--none')
          }

          listCertificate.appendChild(li)
          li.appendChild(a)
          a.appendChild(img)
        }


      }




      const createCardDiploma = (count) => {
        const listDiploma = document.querySelector('.diplomas-list')

        listDiploma.innerHTML = ''

        for (let i = 0; i < diplomaArr.length; i++) {
          const li = document.createElement('li')
          li.classList.add('cert-page__item', 'diploma')
          const a = document.createElement('a')
          const img = document.createElement('img')
          img.src = diplomaArr[i]


          if (count <= i) {
            li.classList.add('d--none')
          }

          listDiploma.appendChild(li)
          li.appendChild(a)
          a.appendChild(img)
        }


      }



      const createCardGratitude = (count) => {
        const listGratitude = document.querySelector('.gratitudes-list')
        listGratitude.innerHTML = ''


        for (let i = 0; i < gratitudeArr.length; i++) {
          const li = document.createElement('li')
          li.classList.add('cert-page__item', 'gratitude')
          const a = document.createElement('a')
          const img = document.createElement('img')
          img.src = gratitudeArr[i]


          if (count <= i) {
            li.classList.add('d--none')
          }

          listGratitude.appendChild(li)
          li.appendChild(a)
          a.appendChild(img)
        }

      }


      checkScreen(window.innerWidth)


      function btnClick(cards, btn) {
        btn.addEventListener('click', function () {
          cards.forEach(item => {
            item.style.display = 'block'
          })
          btn.classList.add('d--none')
        }
        )
      }

      btnClick(document.querySelectorAll('.certificate'), document.getElementById('btn-certificate'));

      btnClick(document.querySelectorAll('.diploma'), document.getElementById('btn-diploma'));

      btnClick(document.querySelectorAll('.gratitude'), document.getElementById('btn-gratitude'));


    }

  } catch (e) { }










  //Бренды

  const swiper = new Swiper(".swiper", {
    speed: 1000,
    spaceBetween: 100,
    loop: false,
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
      567: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 15
      },
      1023: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      1139: {
        slidesPerView: 7,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
    },
  });


  //Карта


  var groups = [
    {
      name: "Адреса",
      style: "islands#redIcon",
      items: [
        {
          center: [53.014796, 36.156400],
          name: "г.Орел, ул. Московское шоссе д. 173"
        },
        {
          center: [47.119537, 39.769738],
          name: "Ростовская область, г. Батайск ул. Комарова д. 181A"
        },
        {
          center: [55.342048, 37.547737],
          name: "Московская область, г. Подольск, посёлок Подольской машинно-испытательной станции, ул. Промышленная, 2а "
        },
        {
          center: [55.675575, 52.454058],
          name: "Республика Татарстан, г.Набережные Челны, Линейный проезд д.18  "
        },
        {
          center: [54.955189, 82.852661],
          name: "г. Новосибирск, ул. Петухова 27/3"
        }
      ]
    },


  ];




  ymaps.ready(init);

  function init() {

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
      center: [55.675575, 52.454058],
      zoom: 20
    }, {
      searchControlProvider: 'yandex#search'
    }),
      // Контейнер для меню.
      menu = $('<ul class="contacts__map-list"/>');

    for (var i = 0, l = groups.length; i < l; i++) {
      createMenuGroup(groups[i]);
    }

    function createMenuGroup(group) {
      // Пункт меню.
      var menuItem = $('<li class = "contacts__map-title-wrapper"><p class = "contacts__map-title" href="#">' + group.name + '</p></li>'),
        // Коллекция для геообъектов группы.
        collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
        // Контейнер для подменю.
        submenu = $('<ul class="contacts__submenu"/>');

      // Добавляем коллекцию на карту.
      myMap.geoObjects.add(collection);
      // Добавляем подменю.
      menuItem
        .append(submenu)
        // Добавляем пункт в меню.
        .appendTo(menu)
        // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
        .find('a')
        .bind('click', function () {
          if (collection.getParent()) {
            myMap.geoObjects.remove(collection);
            submenu.hide();
          } else {
            myMap.geoObjects.add(collection);
            submenu.show();
          }
        });
      for (var j = 0, m = group.items.length; j < m; j++) {
        createSubMenu(group.items[j], collection, submenu);
      }
    }

    function createSubMenu(item, collection, submenu) {
      // Пункт подменю.
      var submenuItem = $('<li class= "contacts__map-item"><a class= "contacts__map-link" href="#">' + item.name + '</a></li>'),
        // Создаем метку.
        placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });

      // Добавляем метку в коллекцию.
      collection.add(placemark);
      // Добавляем пункт в подменю.
      submenuItem
        .appendTo(submenu)
        // При клике по пункту подменю открываем/закрываем баллун у метки.
        .find('a')
        .bind('click', function () {
          if (!placemark.balloon.isOpen()) {
            placemark.balloon.open();
          } else {
            placemark.balloon.close();
          }
          return false;
        });
    }

    // Добавляем меню в тэг BODY.
    menu.appendTo($('#map-list'));
    // Выставляем масштаб карты чтобы были видны все группы.
    myMap.setBounds(myMap.geoObjects.getBounds());
  }





});





