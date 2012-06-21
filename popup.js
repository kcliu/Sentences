// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var req = new XMLHttpRequest();
req.open(
		"GET",
		"http://search.twitter.com/search.json?q=oblivious",
		true);
req.onreadystatechange = showResult
req.send(null);


function showResult() {
	if (req.readyState == 4) {
		var sentences = JSON.parse(req.responseText)
		var ol = document.createElement("ol");
		for (var i = 0; i < sentences.results.length ; i++) {
			var result = sentences.results[i].text
			var li = document.createElement("li");
			li.innerText = result
			ol.appendChild(li)
		}
		document.body.appendChild(ol)
	}
}
