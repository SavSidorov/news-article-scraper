/** TEMPLATE
torontosun: function(snippets) {
		//content goes here

		return snippets;
	},
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
				//Filter out short snippets
				value.length >= 40 &&
				//Filter out "By ...." snippets
				!(value.length <= 150 && /By/.test(value)) &&
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
	cbsnews: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/First published on/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filter out "By ...." snippets
				!(value.length <= 150 && /By/.test(value)) &&
				//Filter out snippets with no lower case letters
				/[a-z]/.test(value) &&
				//Filters out snippets w/ strings in question
				!/All rights reserved./.test(value) &&
				!/All Rights Reserved./.test(value) &&
				!(/Updated/.test(value) && /20/.test(value)) &&
				!(/CBS/.test(value) && /20/.test(value)) &&
				!/Watch CBS News anytime/.test(value)
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
	ctvnews: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/first published/.test(snippets[i]) && /20/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/All rights reserved./.test(value) &&
				!/All Rights Reserved./.test(value) &&
				!/Live Now:/.test(value) &&
				!/CTV News App/.test(value) &&
				!/Terms & Conditions/.test(value) &&
				!/CTVNews.ca/.test(value)
			);
		});

		return snippets;
	},
	dailycaller: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/Getty Images/.test(value) &&
				!/@dailycaller/.test(value)
			);
		});

		return snippets;
	},
	dailywire: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out empty snippets
				value.length >= 5
			);
		});

		return snippets;
	},
	forbes: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40
			);
		});

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
	globalnews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filter out snippets with no lower case letters
				/[a-z]/.test(value) &&
				//Filters out snippets w/ strings in question
				!/Want to discuss\?/.test(value) &&
				!/delivered to your inbox ever weekday/.test(value) &&
				!/READ MORE:/.test(value) &&
				!/@globalnews.ca/.test(value)
			);
		});

		return snippets;
	},
	infowars: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/latest breaking news/.test(value) &&
				!/Image Credits:/.test(value)
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
	metro: function(snippets) {
		//content goes here
		//@metro.co.uk
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/@metro.co.uk/.test(value) &&
				!/MORE:/.test(value)
			);
		});

		return snippets;
	},
	npr: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/Getty Images/.test(value) &&
				!/hide caption/.test(value) &&
				!/@npr.org/.test(value) &&
				!(/Updated/.test(value) && /ET/.test(value)) &&
				!(
					(/is a/.test(value) ||
						/is an/.test(value) ||
						/is the/.test(value)) &&
					/NPR/.test(value)
				)
			);
		});

		return snippets;
	},
	politico: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/©/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filter out snippets with no lower case letters
				/[a-z]/.test(value) &&
				//Filter out "By ...." snippets
				!(value.length <= 150 && /By/.test(value)) &&
				//Filters out snippets w/ strings in question
				!/\|/.test(value) &&
				!/politico\//.test(value)
			);
		});

		return snippets;
	},
	rt: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/All rights reserved./.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/are solely those of the author/.test(value) &&
				!/Share this story!/.test(value) &&
				!/Share it with a friend!/.test(value)
			);
		});

		return snippets;
	},
	spectator: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40
			);
		});

		return snippets;
	},
	techcrunch: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40
			);
		});

		return snippets;
	},
	techradar: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/Reviews Guarantee/.test(value) &&
				!/TechRadar is part of Future US Inc/.test(value) &&
				!/©/.test(value) &&
				!/Get the best tech deals/.test(value) &&
				!(
					/By/.test(value) &&
					/20/.test(value) &&
					/:/.test(value) &&
					/-/.test(value)
				)
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
	thedailybeast: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/Got a tip\?/.test(value)
			);
		});

		return snippets;
	},
	thefederalist: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/All Rights Reserved./.test(snippets[i])) {
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
	},
	thehill: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/The Hill 1625 K Street/.test(value) &&
				!/©/.test(value) &&
				!(/Sign up/.test(value) && /newsletter/.test(value))
			);
		});

		return snippets;
	},
	torontosun: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!(/Updated/.test(value) && /20/.test(value)) &&
				!/Visit our FAQ page/.test(value)
			);
		});

		return snippets;
	},
	ubyssey: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!((/AM/.test(value) || /PM/.test(value)) && /-/.test(value))
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
	vanityfair: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/Privacy Policy/.test(value) &&
				!/twitter.com\//.test(value) &&
				!(/Sign up/.test(value) && /newsletter/.test(value))
			);
		});

		return snippets;
	},
	vox: function(snippets) {
		//If "Terms of Use", "Privacy Policy" or "All Rights Reserved" snippets encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/Terms of Use/.test(snippets[i]) ||
				/Privacy Policy/.test(snippets[i]) ||
				/All Rights Reserved/.test(snippets[i]) ||
				/All rights reserved/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!(/Sign up/.test(value) && /newsletter/.test(value)) &&
				!(/Subscribe/.test(value) && /podcast/.test(value))
			);
		});

		return snippets;
	},
	wired: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filter out short snippets
				value.length >= 40 &&
				//Filters out snippets w/ strings in question
				!/WIRED is where tomorrow is realized/.test(value) &&
				!/All rights reserved./.test(value) &&
				!/Subscribe now./.test(value) &&
				!/mail@wired.com/.test(value) &&
				!/the retail links in our /.test(value) &&
				!/Privacy Policy/.test(value)
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
