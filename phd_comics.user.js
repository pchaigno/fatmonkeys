// ==UserScript==
// @name        PhDComics
// @namespace   fatmonkeys
// @include     http://www.phdcomics.com/comics/archive.php?comicid=*
// @version     1
// @grant       none
// ==/UserScript==

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
       links = document.getElementsByTagName("a");
       for(var i=0; i<links.length; i++) {
         if(links[i].childNodes.length > 0 && links[i].childNodes[0].nodeType == 1 &&
            links[i].childNodes[0].getAttribute('src') == 'images/prev_button.gif') {
           document.location = links[i].getAttribute('href');
         }
       }
    } else if (e.keyCode == '39') {
       links = document.getElementsByTagName("a");
       for(var i=0; i<links.length; i++) {
         if(links[i].childNodes.length > 0 && links[i].childNodes[0].nodeType == 1 &&
            links[i].childNodes[0].getAttribute('src') == 'images/next_button.gif') {
           document.location = links[i].getAttribute('href');
         }
       }
    }

}
