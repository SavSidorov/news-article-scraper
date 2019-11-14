const filterMatchedSnippets = require("./filterMatchedSnippets.js");

module.exports = {
	getSnippets: function($, url) {
		let snippets = [];
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

		const snippetTags = [
			'div[class="zn-body__paragraph speakable"]',
			'div[class="zn-body__paragraph"]',
			'div[class="article__summary summary "]',
			'div[class="l-article__part"]',
			"li[class=gnt_ar_b_ul_li]",
			"blockquote",
			//"li", //FIXME: Lists are problematic at the moment.
			"p"
			// Add to this list to increase number of supported snippet tag variants
		];

		//Pull snippets from HTML using all snippet tags
		//TODO: Get the ordering right --> regex?
		let snippetsArrayLength = 0;
		snippetTags.forEach(element => {
			$(element).each(function(i) {
				snippets[snippetsArrayLength + i] = $(this).text();
			});
			snippetsArrayLength = snippets.length;
		});

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
		splitSnippet = snippets[i].split(/\. |\? |! /);
		paragraphSnippets = paragraphSnippets.concat(splitSnippet);
	}

	//Trim each sentence and combine short sentences
	for (let i = 0; i < paragraphSnippets.length; i++) {
		//Fixes acronyms and short sentences by joining to the next sentence
		if (
			paragraphSnippets[i].length < 50 &&
			paragraphSnippets[i + 1] != undefined
		) {
			paragraphSnippets[i] =
				paragraphSnippets[i] + ". " + paragraphSnippets[i + 1];
			paragraphSnippets.splice(i + 1, 1);
		}

		paragraphSnippets[i] = paragraphSnippets[i].trim();
	}

	//Remove any dublicates from snippets
	paragraphSnippets = [...new Set(paragraphSnippets)];

	return paragraphSnippets;
}
