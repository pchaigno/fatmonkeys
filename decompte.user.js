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

function validate(week){
  eventFire(week, 'click');
  tbody = document.getElementsByTagName('tbody')[0];
  if (tbody){
    trs = tbody.children;
    for (var i=0; i<trs.length; i++){
      motif = trs[i].children[4].children[0].innerHTML;
      //alert(motif);
      if(motif == '½ CA' || motif == '½ JTL'){
        //alert('half day');
        inputs = trs[i].children[2].getElementsByTagName('input');
        //hour
        inputs[0].value = "3";
        eventFire(inputs[0], 'input');
        //min
        inputs[1].value = "48";
        eventFire(inputs[1], 'input');
        eventFire(inputs[0], 'change');
      }
    }
  }
  setTimeout(function() {
    eventFire(document.getElementById('gwt-uid-1'), 'click');
  }, 2000);
  button = document.getElementsByClassName('button-action-primaire')[0];
  if (button){
    setTimeout(function() {
      eventFire(button, 'click');
    }, 2200);
  }
}

function decompte() {
  setTimeout(function(){
    var dropdown = document.getElementsByClassName('alertbox-content')[0];
    if (dropdown){
      eventFire(dropdown, 'click');
      setTimeout(function() {
        var week = document.getElementsByClassName('disclosure-panel')[0].getElementsByTagName('a')[0];
        if (week){
          validate(week);
        }
      }, 1000);
    }
  }, 1000);
}

decompte();
