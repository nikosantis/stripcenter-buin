var NavbarSticky = (function () {
  // Variables
  var $nav = $('#navbarTop'),
    navOffsetTop = 0,
    scrolling = false;
  // Methods
  function init($this) {
    // our current vertical position from the top
    var scrollTop = $(window).scrollTop(),
      navHeight = $this.outerHeight();
    if (scrollTop > (navOffsetTop + 200)) {
      $this.addClass('sticky');
    } else {
      $this.removeClass('sticky');
    }
  }
  // Events
  if ($nav.length) {
    navOffsetTop = $nav.offset().top;
    $(window).on({
      'scroll': function () {
        scrolling = true;
        setInterval(function () {
          if (scrolling) {
            scrolling = false;
            // Sticky navbar init
            init($nav);
          }
        }, 250);
      }
    })
  }
})();

$( document ).ready(function() {
  $('.hero-slider').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    items: 1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    autoplaySpeed: 500,
    dots:false,
    nav:false
  });

  $('.my-slider').owlCarousel({
    center: true,
    animateOut: 'fadeOut',
    stagePadding: 50,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    autoplaySpeed: 500,
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

document.querySelectorAll('.modal-button').forEach(function(el) {
  el.addEventListener('click', function() {
    var target = document.querySelector(el.getAttribute('data-target'));

    target.classList.add('is-active');

    target.querySelector('.modal-close').addEventListener('click', function() {
      target.classList.remove('is-active');
    });

    target.querySelector('.modal-background').addEventListener('click', function() {
      target.classList.remove('is-active');
    });
  });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});