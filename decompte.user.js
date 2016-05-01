// @name        Decompte
// @namespace   fatmonkeys
// @include     https://[url]/index.html
// @version     1
// @grant       none
// ==/UserScript==

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj;
    if(etype == 'click') {
      evObj = document.createEvent('MouseEvents');
      evObj.initMouseEvent('click', true, true, window, 0, 584, 476, 584, 476, false, false, false, false, 0, null);
    } else {
      evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
    }
    el.dispatchEvent(evObj);
  }
}

setTimeout(function() {
  var dropdown = document.getElementsByClassName('alertbox-content')[0];
  if(dropdown) {
    eventFire(dropdown, 'click');
    setTimeout(function() {
      var week = document.getElementsByClassName('disclosure-panel')[0].getElementsByTagName('a')[0];
      if(week) {
        eventFire(week, 'click');
        setTimeout(function() {
          eventFire(document.getElementById('gwt-uid-1'), 'click');
        }, 10000);
      }
    }, 1000);
  }
}, 2000);
