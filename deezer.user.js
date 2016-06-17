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
// Ctrl + Up arrow to like a track or cancel a dislike.
// Ctrl + Down arrow to dislike a track or cancel a like.
 
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
 
function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
 
function getPlayButton() {
  var div = document.getElementById('naboo_content');
  var play_button = null;
  if(div != null) {
    play_button = div.getElementsByClassName('icon-stack-circle')[0];
  }
  return play_button;
}
 
function getDislikeButton() {
  return document.getElementById('flow-unlove');
}
 
function getLikeButton() {
  return document.getElementById('flow-love');
}
 
function getLikeStatus() {
  var icon_love = document.getElementById('flow-love').getElementsByClassName('icon-love')[0];
  var icon_unlove = document.getElementById('flow-unlove').getElementsByClassName('icon-unlove')[0];
  if(hasClass(icon_love, 'active')) {
    return 1;
  }
  if(hasClass(icon_unlove, 'active')) {
    return -1;
  }
  return 0;
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
  var button = null;
  if (e.keyCode == 32) {
    button = getPlayButton();
  } else if(e.ctrlKey) {
    switch(e.keyCode) {
      case 38:
        if(getLikeStatus() == -1) {
          button = getDislikeButton();
        } else {
          button = getLikeButton();
        }
        break;
      case 39:
        button = getNextButton();
        break;
      case 40:
        if(getLikeStatus() == 1) {
          button = getLikeButton();
        } else {
          button = getDislikeButton();
        }
        break;
    }
  }
  if(button != null) {
    eventFire(button, 'click');
    return false;
  }
  return true;
}