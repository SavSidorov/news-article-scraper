const filterMatchedSnippets = require("./filterMatchedSnippets.js");

module.exports = {
	getSnippets: function($, url) {
		let snippets = [];
		var snippetTags = [];
		const supportedUrls = [
			"abcnews",
			"alternet",
			"apnews",
			"axios",
			"bbc",
			"breitbart",
			"businessinsider",
			"buzzfeednews",
			"cbc",
			"cbsnews",
			"cnet",
			"cnn",
			"csmonitor",
			"ctvnews",
			"dailycaller",
			"dailymail",
			"dailywire",
			"democracynow",
			"economist",
			"forbes",
			"foxbusiness",
			"foxnews",
			"globalnews",
			"infowars",
			"latimes",
			"macleans",
			"metro",
			"motherjones",
			"nationalreview",
			"nbcnews",
			"newsmax",
			"newyorker",
			"npr",
			"nypost",
			"nytimes",
			"politico",
			"reuters",
			"rt",
			"slate",
			"spectator",
			"techcrunch",
			"techradar",
			"theatlantic",
			"theblaze",
			"thedailybeast",
			"thefederalist",
			"theglobeandmail",
			"theguardian",
			"thehill",
			"theintercept",
			"thenation",
			"thestar",
			"time",
			"torontosun",
			"ubyssey",
			"usatoday",
			"vancouversun",
			"vanityfair",
			"vox",
			"washingtonpost",
			"washingtontimes",
			"wired",
			"wsj",
			"yahoo"
			// Add to this list to increase number of supported urls
		];
		console.log("Number of supported websites: " + supportedUrls.length);

		//Pull snippets with these specified selectors
		$(
			'p, li, blockquote, div[class="zn-body__paragraph speakable"], div[class="zn-body__paragraph"], div[class="article__summary summary "], div[class="l-article__part"]'
		).each(function(i) {
			snippets[i] = $(this).text();
			snippetTags[i] = $(this).get(0).tagName;
		});

		//Identify the index of the first and last paragraph
		var firstIndex, lastIndex;
		for (let i = 0; i <= snippetTags.length; i++) {
			if (snippetTags[i] != "li" && firstIndex == undefined)
				firstIndex = i;
		}
		for (let j = snippetTags.length - 1; j >= 0; j--) {
			if (snippetTags[j] != "li" && lastIndex == undefined)
				lastIndex = j - firstIndex;
		}

		//Trim out the junk 'li' tags that are unbounded by <p> tags
		snippets.splice(0, firstIndex);
		snippets.splice(lastIndex + 1, snippets.length - lastIndex);

		//Filter snippets based on website match
		let websiteMatch = false;
		for (let i = 0; i < supportedUrls.length; i++) {
			let substring = supportedUrls[i] + ".";

			if (url.includes(substring)) {
				console.log("Match found: " + supportedUrls[i]);
				snippets = filterMatchedSnippets[supportedUrls[i]](snippets);
				websiteMatch = true;
			}
		}

		if (!websiteMatch) {
			console.log("SITE NOT SUPPORTED");
			snippets = [];
		}

		snippets = generalFormattingAndFiltering(snippets);

		return snippets;
	}
};

function generalFormattingAndFiltering(snippets) {
	for (let i = 0; i < snippets.length; i++) {
		snippets[i] = snippets[i].replace(/\n/g, "");
		snippets[i] = snippets[i].replace(/\t/g, " ");
		snippets[i] = snippets[i].replace(/\s+/g, " ");
		snippets[i] = snippets[i].replace(/"/g, "“");
		snippets[i] = snippets[i].trim();
	}

	//Filter out short snippets, snippets with no lower case letters & do general filtering
	snippets = snippets.filter(function(value) {
		return (
			value.length >= 40 &&
			/[a-z]/.test(value) &&
			!/contributed to this report./.test(value) &&
			!/contribute to this report./.test(value) &&
			!/contributed to this article./.test(value) &&
			!/contribute to this article./.test(value) &&
			!(/Updated/.test(value) && /20/.test(value)) &&
			!(/—/.test(value) && /@/.test(value) && /20/.test(value)) &&
			//Note: Deactivate the rules below if adding new website support;
			//They are used for filtering all snippets after the encountered string in some specific scrapers
			!/©/.test(value) &&
			!/All Rights Reserved./.test(value) &&
			!/All rights reserved./.test(value) &&
			!/Terms & Conditions/.test(value) &&
			!/Terms of Use/.test(value) &&
			!/Terms of Service/.test(value) &&
			!/Privacy Policy/.test(value)
		);
	});

	//Split snippets into paragraphs
	var paragraphSnippets = [];
	for (let i = 0; i < snippets.length; i++) {
		//Split on '.', '!', '?'
		//Split string only if the last word is 4 or more characters.
		//Lookbehinds (?<=y)x take care of things like acronyms, middle names, month names (eg. Feb.)
		splitSnippet = snippets[i].split(/(?<=(\w{4}|'\w|”|“))\. |\? |! /);
		paragraphSnippets = paragraphSnippets.concat(splitSnippet);
	}

	//Trim sentences
	for (let i = 0; i < paragraphSnippets.length; i++) {
		//Checks for 'undefined and fragments'
		if (
			paragraphSnippets[i] == undefined ||
			paragraphSnippets[i].length <= 4
		) {
			paragraphSnippets.splice(i, 1);
		} else {
			paragraphSnippets[i] = paragraphSnippets[i].trim();
		}
	}

	//Remove any dublicates from snippets
	paragraphSnippets = [...new Set(paragraphSnippets)];

	return paragraphSnippets;
}
