/** TEMPLATE
 newsorg : function(snippets){
	//content goes here 

	return snippets
 }
 */

module.exports = {
	abcnews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/contributed to this report./.test(value) &&
				!/contribute to this report./.test(value) &&
				!/contributed to this article./.test(value) &&
				!/contribute to this article./.test(value) &&
				!/ABC News'/.test(value) &&
				!/Download the/.test(value)
			);
		});

		return snippets;
	},
	alternet: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/All Rights Reserved./.test(value) &&
				!/Mozilla\//.test(value) &&
				!/AlterNet/.test(value) &&
				!/Alternet/.test(value) &&
				!/Progressive news is under siege/.test(value) &&
				!/Your support goes a long way./.test(value)
			);
		});

		return snippets;
	},
	apnews: function(snippets) {
		////If "___" snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (snippets[i] == "___") {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		return snippets;
	},
	buzzfeednews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets (larger than usual because of author snippets)
				value.length >= 50 &&
				//Filters out snippets w/ strings in question
				!(/Posted on/.test(value) && /20/.test(value)) &&
				!/@buzzfeed.com/.test(value) &&
				!(/@/.test(value) && /20/.test(value)) &&
				!(/is a/.test(value) && /based in/.test(value)) &&
				!(/is an/.test(value) && /based in/.test(value)) &&
				!(/is the/.test(value) && /based in/.test(value)) &&
				!(/Last updated on/.test(value) && /20/.test(value))
			);
		});

		return snippets;
	},
	cnn: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filter out snippets with no lower case letters
				/[a-z]/.test(value) &&
				//Filters out snippets w/ strings in question
				!/contributed to this report./.test(value) &&
				!/contribute to this report./.test(value) &&
				!/contributed to this article./.test(value) &&
				!/contribute to this article./.test(value) &&
				!(/Analysis by/.test(value) && value.length <= 100) &&
				!(/Updated/.test(value) && /20/.test(value)) &&
				!/Chat with us in Facebook Messenger/.test(value) &&
				!/CNN Opinion/.test(value)
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
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/contributed to this report./.test(value) &&
				!/contribute to this report./.test(value) &&
				!/contributed to this article./.test(value) &&
				!/contribute to this article./.test(value)
			);
		});

		return snippets;
	},
	theblaze: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40
			);
		});

		return snippets;
	},
	usatoday: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/:\w/.test(value) &&
				!/Click here /.test(value)
			);
		});

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

		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40
			);
		});

		return snippets;
	}
};
