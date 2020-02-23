$('.loop').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  responsive:{
    600:{
      items:4
    }
  }
});

$('.my-slider').owlCarousel({
  center: true,
  stagePadding: 50,
  loop:true,
  margin:30,
  dots:true,
  nav:false,
  responsive:{
    0:{
      stagePadding: 30,
      margin:10,
      items:1
    },
    768:{
      items:2
    }
  }
});

let tabsWithContent1 = (function () {
  let tabs = document.querySelectorAll('#tab1 li');
  let tabsContent = document.querySelectorAll('#contentTab1');

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  let hideTabsContent = function () {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove('is-active');
    });
  };

  let activateTabsContent = function (tab) {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  })

  tabs[0].click();
})();

let tabsWithContent2 = (function () {
  let tabs = document.querySelectorAll('#tab2 li');
  let tabsContent = document.querySelectorAll('#contentTab2');

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  let hideTabsContent = function () {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove('is-active');
    });
  };

  let activateTabsContent = function (tab) {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  })

  tabs[0].click();
})();



var h = document.getElementById("navbarTop");
var stuck = false;
var stickPoint = getDistance();
let navHeight = h.offsetHeight;

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ( window.pageYOffset > 200 && !stuck) {
    h.classList.add('sticky');
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    h.classList.remove('sticky');
    stuck = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

document.querySelector('a#carouselItem1').addEventListener('click', (event) => {
  event.preventDefault();
  var modal = document.querySelector('.modal1');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });

  modal.querySelector('.modal-close').addEventListener('click', (ev) => {
    ev.preventDefault();
    var modal = document.querySelector('.modal1');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});

document.querySelector('a#carouselItem2').addEventListener('click', (event) => {
  event.preventDefault();
  var modal = document.querySelector('.modal2');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });

  modal.querySelector('.modal-close').addEventListener('click', (ev) => {
    ev.preventDefault();
    var modal = document.querySelector('.modal2');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});

document.querySelector('a#carouselItem3').addEventListener('click', (event) => {
  event.preventDefault();
  var modal = document.querySelector('.modal3');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });

  modal.querySelector('.modal-close').addEventListener('click', (ev) => {
    ev.preventDefault();
    var modal = document.querySelector('.modal3');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});

document.querySelector('a#carouselItem4').addEventListener('click', (event) => {
  event.preventDefault();
  var modal = document.querySelector('.modal4');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });

  modal.querySelector('.modal-close').addEventListener('click', (ev) => {
    ev.preventDefault();
    var modal = document.querySelector('.modal4');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});

document.querySelector('a#carouselItem5').addEventListener('click', (event) => {
  event.preventDefault();
  var modal = document.querySelector('.modal5');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });

  modal.querySelector('.modal-close').addEventListener('click', (ev) => {
    ev.preventDefault();
    var modal = document.querySelector('.modal5');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});

document.querySelector('a#carouselItem6').addEventListener('click', (event) => {
  event.preventDefault();
  var modal = document.querySelector('.modal6');  // assuming you have only 1
  var html = document.querySelector('html');
  modal.classList.add('is-active');
  html.classList.add('is-clipped');

  modal.querySelector('.modal-background').addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });

  modal.querySelector('.modal-close').addEventListener('click', (ev) => {
    ev.preventDefault();
    var modal = document.querySelector('.modal6');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
  });
});
