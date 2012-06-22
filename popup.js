// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var req = new XMLHttpRequest();
var a = document.getElementById("button");
var b = document.getElementById("query-field");
a.addEventListener("click", sendRequest, false)

function sendRequest() {
	var query = b.value
	//for test
	//req.open("GET", "http://search.twitter.com/search.json?q=oblivious", true);
	req.open("GET", 
			 "http://search.twitter.com/search.json?q=" + query,
			  true);
	
	req.onreadystatechange = showResult
	req.send(null);
}

function showResult() {
	if (req.readyState == 4) {
		var sentences = JSON.parse(req.responseText)
		var ol = document.createElement("ol");
		for (var i = 0; i < sentences.results.length ; i++) {
			var result = sentences.results[i].text
			var li = document.createElement("li");
			var p = document.createElement("p");
			li.innerText = result
			p.appendChild(li)
			ol.appendChild(p)
		}
		document.body.appendChild(ol)
	}
}

function createResultHTML( a ) {
;
}
