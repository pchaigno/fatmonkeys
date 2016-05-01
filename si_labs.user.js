// ==UserScript==
// @name        SI Labs
// @namespace   fatmonkey
// @include     http://[url]/feuille-temps
// @version     1
// @grant       none
// ==/UserScript==

var inputs = document.getElementsByTagName('input');
for(var i=0; i<inputs.length; i++) {
  if(inputs[i].id.indexOf('jour') != -1 &&
     inputs[i].id.indexOf('_10531055') != -1 && 
     inputs[i].className.indexOf('greyBg') == -1) {
    inputs[i].value = '1.0';
  }
}
