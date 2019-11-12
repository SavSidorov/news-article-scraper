module.exports = {
	abcnews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/contributed to this report./.test(value) &&
				!/contribute to this report./.test(value) &&
				!/contributed to this article./.test(value) &&
				!/contribute to this article./.test(value)
			);
		});

		return snippets;
	},
	cnn: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out empty snippets
				value != "" &&
				//Filter out short snippets
				value.length >= 30 &&
				//Filter out snippets with no lower case letters
				/[a-z]/.test(value) &&
				//Filters out snippets w/ strings in question
				!/contributed to this report./.test(value) &&
				!/contribute to this report./.test(value) &&
				!/contributed to this article./.test(value) &&
				!/contribute to this article./.test(value) &&
				!(/Analysis by/.test(value) && value.length <= 100) &&
				!(/Updated/.test(value) && /20/.test(value)) &&
				!/Chat with us in Facebook Messenger/.test(value)
			);
		});

		//Format snippets
		for (let i = 0; i < snippets.length; i++) {
			snippets[i] = snippets[i].replace(/\((CNN)\)/g, "");
		}

		return snippets;
	},
	foxnews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out snippets with no lower case letters
				/[a-z]/.test(value) &&
				//Filters out snippets w/ strings in question
				!/contributed to this report./.test(value) &&
				!/contribute to this report./.test(value) &&
				!/contributed to this article./.test(value) &&
				!/contribute to this article./.test(value) &&
				!/All rights reserved./.test(value)
			);
		});

		return snippets;
	},
	foxbusiness: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out snippets with no lower case letters
				/[a-z]/.test(value) &&
				//Filters out snippets w/ strings in question
				!/contributed to this report./.test(value) &&
				!/contribute to this report./.test(value) &&
				!/contributed to this article./.test(value) &&
				!/contribute to this article./.test(value) &&
				!/Continue Reading Below/.test(value) &&
				!/All rights reserved./.test(value) &&
				!/\((Terms & Conditions)\)/.test(value)
			);
		});

		return snippets;
	},
	latimes: function(snippets) {
		return snippets;
	},
	usatoday: function(snippets) {
		return snippets;
	},
	yahoo: function(snippets) {
		//If "_____" snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (snippets[i] == "_____") {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		return snippets;
	}
};
