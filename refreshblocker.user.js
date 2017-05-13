// ==UserScript==
// @name           Meta Refresh Blocker
// @namespace      fatmonkeys
// @description    Block meta refresh. Based on Fabrizio's script: http://userscripts.org/scripts/show/5506.
// @include        http://www.lemonde.fr/*
// ==/UserScript==

(function(){
	var allMetas, thisMeta, content, timeout, timeout_ms, url, link;

	timeout = -1;
	url = 'none';

	allMetas = document.getElementsByTagName('meta');
	for (var i = 0; i < allMetas.length; i++) {
		thisMeta = allMetas[i];

		if (thisMeta.httpEquiv.match(/refresh/i)) {
			if (thisMeta.content.match(/[\D]/)) {
				content = thisMeta.content.split(';');
				timeout = content[0];
				
				url = thisMeta.content.match(/url=['"]?([^'"]+)['"]?$/i);
				url = RegExp.lastParen;
			}
			else {
				timeout = thisMeta.content;
				url = thisMeta.baseURI;
			}
		}
	}

	if (timeout < 10) {
	// A refresh of < 10 secs is probably a redirect.
		return;
	}

	if (timeout > 0) {
		timeout_ms = (timeout - 1) * 1000;
	}

	if (timeout >= 0) {
		// In case load hasn't finished when the refresh fires.
		var stopTimer = window.setTimeout("window.stop();", timeout_ms); 
		window.addEventListener("load", function() {
			try { window.clearTimeout(stopTimer); } catch(ex) {}
			window.stop();
		}, true);
	}
})();
