// ==UserScript==
// @name        VLC Remote
// @namespace   fatmonkeys
// @include     http://[IP address of VLC Remote server]:8080/
// @version     1
// @grant       none
// ==/UserScript==

document.onkeypress = checkKey;

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function checkKey(e) {
    e = e || window.event;
    if (e.charCode == 32) {
      eventFire(document.getElementById('buttonPlay'), 'click');
    } else if(e.ctrlKey && e.keyCode == 37) {
      eventFire(document.getElementById('buttonPrev'), 'mousedown');
      eventFire(document.getElementById('buttonPrev'), 'mouseup');
    } else if(e.ctrlKey && e.keyCode == 39) {
      eventFire(document.getElementById('buttonNext'), 'mousedown');
      eventFire(document.getElementById('buttonNext'), 'mouseup');
    }
}