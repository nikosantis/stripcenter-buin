const slider = tns({
  container: '.my-slider',
  'items': 2,
  'center': true,
  'loop': false,
  'swipeAngle': false,
  'speed': 400,
  'mouseDrag': true,
  'gutter': 30,
  'loop': true,
  'navPosition': 'bottom',
  'controls': false
});

let tabsWithContent = (function () {
  let tabs = document.querySelectorAll('.tabs li');
  let tabsContent = document.querySelectorAll('.tab-content');

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