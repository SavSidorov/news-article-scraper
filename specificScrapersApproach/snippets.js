const filterMatchedSnippets = require("./filterMatchedSnippets.js");

module.exports = {
	getSnippets: function($, url) {
		let snippets = [];
		var snippetTags = [];
		const supportedUrls = [
			"cnn",
			"foxnews",
			"foxbusiness",
			"yahoo",
			"latimes",
			"usatoday",
			"abcnews",
			"alternet",
			"apnews",
			"theblaze",
			"buzzfeednews",
			"cbsnews",
			"ctvnews",
			"dailywire",
			"forbes",
			"vox",
			"vanityfair",
			"wired",
			"infowars",
			"thefederalist",
			"rt",
			"npr",
			"spectator",
			"metro",
			"thedailybeast",
			"ubyssey",
			"politico",
			"globalnews",
			"dailycaller",
			"thehill",
			"techcrunch",
			"techradar",
			"torontosun"
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

		snippets = generalFormatting(snippets);

		return snippets;
	}
};

function generalFormatting(snippets) {
	for (let i = 0; i < snippets.length; i++) {
		snippets[i] = snippets[i].replace(/\n/g, "");
		snippets[i] = snippets[i].replace(/\t/g, " ");
		snippets[i] = snippets[i].replace(/\s+/g, " ");
		snippets[i] = snippets[i].replace(/"/g, "“");
		snippets[i] = snippets[i].trim();
	}

	//Filter out short snippets
	snippets = snippets.filter(function(value) {
		return value.length >= 40;
	});

	//Split snippets into paragraphs
	var paragraphSnippets = [];
	for (let i = 0; i < snippets.length; i++) {
		//Split on '.', '!', '?'
		//Lookbehinds (?<=y)x take care of things like acronyms and middle names
		splitSnippet = snippets[i].split(/(?<=(\w{2}|'\w))\. |\? |! /);
		paragraphSnippets = paragraphSnippets.concat(splitSnippet);
	}

	//Trim sentences
	for (let i = 0; i < paragraphSnippets.length; i++) {
		//Checks for 'undefined and fragments'
		if (paragraphSnippets[i].length <= 2) {
			paragraphSnippets.splice(i, 1);
		} else {
			paragraphSnippets[i] = paragraphSnippets[i].trim();
		}
	}

	//Remove any dublicates from snippets
	paragraphSnippets = [...new Set(paragraphSnippets)];

	return paragraphSnippets;
}
