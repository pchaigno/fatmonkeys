// ==UserScript==
// @name        CommitStrip
// @namespace   fatmonkeys
// @include     http://www.commitstrip.com/*
// @version     1
// @grant       none
// ==/UserScript==

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
       links = document.getElementById("content").getElementsByTagName("a");
       for(var i=0; i<links.length; i++) {
         if(links[i].getAttribute('rel') == 'prev') {
           document.location = links[i].getAttribute('href');
         }
       }
    } else if (e.keyCode == '39') {
       links = document.getElementById("content").getElementsByTagName("a");
       for(var i=0; i<links.length; i++) {
         if(links[i].getAttribute('rel') == 'next') {
           document.location = links[i].getAttribute('href');
         }
       }
    }
}
