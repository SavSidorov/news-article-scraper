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
			"abcnews"
			// Add to this list to increase number of supported urls
		];

		const snippetTags = [
			"p",
			'div[class="zn-body__paragraph speakable"]',
			'div[class="zn-body__paragraph"]',
			"li[class=gnt_ar_b_ul_li]"
			// Add to this list to increase number of supported snippet tag variants
		];

		//Pull snippets from HTML using all snippet tags
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
				console.log("Your website is: " + supportedUrls[i]);
				snippets = filterMatchedSnippets[supportedUrls[i]](snippets);
				websiteMatch = true;
			}
		}

		if (!websiteMatch) {
			console.log("SITE NOT SUPPORTED");
			snippets = [];
		}

		//Do some generic formatting on the snippets array
		for (let i = 0; i < snippets.length; i++) {
			snippets[i] = snippets[i].replace(/\n/g, "");
			snippets[i] = snippets[i].replace(/\t/g, " ");
			snippets[i] = snippets[i].replace(/\s+/g, " ");
			snippets[i] = snippets[i].trim();
		}

		return snippets;
	}
};
