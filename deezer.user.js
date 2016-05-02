// ==UserScript==
// @name        Deezer
// @namespace   fatmonkeys
// @include     http://www.deezer.com/
// @run-at      document-start
// @version     1
// @grant       none
// ==/UserScript==

// Enables new keyboard shortcuts:
// Space to start flow (overrides the default shortcut).
// Ctrl + Right arrow to jump to the next track in flow.

(window.opera ? document.body : document).addEventListener('keydown', function(e) {
  return checkKey(e);
}, !window.opera);

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function getPlayButton() {
  var div = document.getElementById('naboo_content');
  var play_button = null;
  if(div != null) {
    play_button = div.getElementsByClassName('icon-stack-circle')[0];
  }
  return play_button;
}

function getNextButton() {
  var div = document.getElementById('naboo_content');
  var next_button = null;
  if(div != null) {
    list = div.getElementsByClassName('flow-action-list')[0];
    if(list != null) {
      elements = list.getElementsByTagName('li');
      next_button = elements[elements.length - 1].getElementsByTagName('a')[0];
    }
  }
  return next_button;
}

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == 32) {
    var play_button = getPlayButton();
    if(play_button != null) {
      eventFire(play_button, 'click');
      return false;
    }
  } else if(e.ctrlKey && e.keyCode == 39) {
    var next_button = getNextButton();
    if(next_button != null) {
      eventFire(next_button, 'click');
    }
  }
  return true;
}
