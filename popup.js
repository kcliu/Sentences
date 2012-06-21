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
		for (var i = 0, result;result = sentences.results[i].text; i++) { 
			var text = document.createTextNode(result)
			document.body.appendChild(text)
		}
	}
}
