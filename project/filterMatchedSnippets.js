/** TEMPLATE
abcnews: function(snippets) {
		//content goes here

		return snippets;
	},
 */

module.exports = {
	abcnews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/ABC News'/.test(value) && !/Download the/.test(value)
			);
		});

		return snippets;
	},
	alternet: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
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
		//If "___" snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (snippets[i] == "___") {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		return snippets;
	},
	axios: function(snippets) {
		return snippets;
	},
	bbc: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/These are external links/.test(value) &&
				!(/:/.test(value) && /201/.test(value)) &&
				!(/:/.test(value) && /202/.test(value))
			);
		});

		return snippets;
	},
	breitbart: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/Please let us know if you're having issues with commenting/.test(
					snippets[i]
				)
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(/Follow/.test(value) && /on Twitter/.test(value))
			);
		});

		return snippets;
	},
	businessinsider: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/@businessinsider.com/.test(value) &&
				!(/contributed/.test(value) && /to this post/.test(value)) &&
				!(/contributed/.test(value) && /for this piece/.test(value))
			);
		});

		return snippets;
	},
	buzzfeednews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
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
	cbc: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/CBC's Opinion section/.test(value) &&
				!/CBC\/Radio-Canada/.test(value) &&
				!/CBC has the right to/.test(value) &&
				!/CBC does not endorse/.test(value) &&
				!/Submission Guidelines/.test(value) &&
				!/Comments are welcome while open/.test(value) &&
				!/We reserve the right to close comments/.test(value) &&
				!/Audience Relations/.test(value) &&
				!/Closed Captioning/.test(value) &&
				!/a priority for CBC/.test(value)
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
				//Filter out "By ...." snippets
				!(value.length <= 150 && /By/.test(value)) &&
				//Filters out snippets w/ strings in question
				!(/CBS/.test(value) && /20/.test(value)) &&
				!/Watch CBS News anytime/.test(value)
			);
		});

		return snippets;
	},
	cnet: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Be respectful, keep it civil and stay on topic/.test(value) &&
				!/We delete comments that violate our policy/.test(value) &&
				!/Discussion threads can be closed at any time/.test(value) &&
				!/CNET también está disponible en español./.test(value)
			);
		});

		return snippets;
	},
	cnn: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(/Analysis by/.test(value) && value.length <= 100) &&
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
	csmonitor: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/We want to hear from you/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(/By/.test(value) && /@/.test(value)) &&
				!/One month free trial/.test(value) &&
				!/Monitor's/.test(value) &&
				!/Stay informed about the latest/.test(value) &&
				!/Monitor views/.test(value) &&
				!/Latest book reviews, author interviews, and reading trends/.test(
					value
				) &&
				!/Christian Science articles/.test(value) &&
				!/Hear about special editorial projects/.test(value) &&
				!/A weekly update on major political events/.test(value)
			);
		});

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
				//Filters out snippets w/ strings in question
				!/Live Now:/.test(value) &&
				!/CTV News App/.test(value) &&
				!/CTVNews.ca/.test(value)
			);
		});

		return snippets;
	},
	dailycaller: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Getty Images/.test(value) && !/@dailycaller/.test(value)
			);
		});

		return snippets;
	},
	dailymail: function(snippets) {
		//If "Privacy Policy" snippets encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/Privacy Policy/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(/By/.test(value) && /Daily Mail/.test(value)) &&
				!/<img/.test(value) &&
				!/The Telegraph -/.test(value) &&
				!/The comments below have been moderated/.test(value) &&
				!/The comments below have not been moderated/.test(value) &&
				!/you would like it to be posted to Facebook/.test(value) &&
				!/confirm this for your first post to Facebook/.test(value) &&
				!/By posting your comment you agree/.test(value) &&
				!/@mailonline.co.uk/.test(value) &&
				!/MailOnline/.test(value) &&
				!/Mailonline/.test(value)
			);
		});

		return snippets;
	},
	dailywire: function(snippets) {
		return snippets;
	},
	democracynow: function(snippets) {
		return snippets;
	},
	economist: function(snippets) {
		//If snippets encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/<div/.test(snippets[i]) ||
				(/Sign up/.test(snippets[i]) && /newsletter/.test(snippets[i]))
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Upgrade your inbox/.test(value)
			);
		});

		return snippets;
	},
	forbes: function(snippets) {
		return snippets;
	},
	foxnews: function(snippets) {
		return snippets;
	},
	foxbusiness: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Continue Reading Below/.test(value)
			);
		});

		return snippets;
	},
	globalnews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
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
				//Filters out snippets w/ strings in question
				!/latest breaking news/.test(value) &&
				!/Image Credits:/.test(value)
			);
		});

		return snippets;
	},
	latimes: function(snippets) {
		return snippets;
	},
	macleans: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/an email with instructions/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(/Authors/.test(value) && /Maclean's/.test(value)) &&
				!(/newsletter/.test(value) && /Sign-up/.test(value)) &&
				!/Getty Images/.test(value) &&
				!/MORE:/.test(value)
			);
		});

		return snippets;
	},
	metro: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/@metro.co.uk/.test(value) && !/MORE:/.test(value)
			);
		});

		return snippets;
	},
	motherjones: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/Mother Jones was founded as a nonprofit/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		return snippets;
	},
	nationalreview: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/Get our conservative analysis/.test(snippets[i]) ||
				/delivered straight to your inbox/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/This article originally appeared in/.test(value)
			);
		});

		return snippets;
	},
	nbcnews: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(
					(/is a/.test(value) ||
						/is an/.test(value) ||
						/is the/.test(value)) &&
					/NBC/.test(value)
				)
			);
		});

		return snippets;
	},
	newsmax: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/©/.test(snippets[i]) ||
				/Newsmax Comment Policy/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(/\|/.test(value) && /201/.test(value)) &&
				!(/\|/.test(value) && /202/.test(value))
			);
		});

		return snippets;
	},
	newyorker: function(snippets) {
		for (let i = 0; i < snippets.length; i++) {
			if (
				(/Subscribe to/.test(snippets[i]) ||
					/Sign up/.test(snippets[i])) &&
				/newsletter/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/newyorker.com/.test(value)
			);
		});

		return snippets;
	},
	npr: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Getty Images/.test(value) &&
				!/hide caption/.test(value) &&
				!/@npr.org/.test(value) &&
				!(/Updated/.test(value) && /ET/.test(value)) &&
				!/NPR embedded audio player/.test(value) &&
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
	nypost: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/Sections & Features/.test(snippets[i]) ||
				/Manage Subscription/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Thanks for contacting us/.test(value) &&
				!/Sub Menu 1/.test(value) &&
				!/Apple Podcasts/.test(value)
			);
		});

		return snippets;
	},
	nytimes: function(snippets) {
		return snippets;
	},
	politico: function(snippets) {
		//If © snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/©/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filter out "By ...." snippets
				!(value.length <= 150 && /By/.test(value)) &&
				//Filters out snippets w/ strings in question
				!/\|/.test(value) &&
				!/politico\//.test(value)
			);
		});

		return snippets;
	},
	reuters: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/landscape-tablet-/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!(/eporting by/.test(value) && /riting by/.test(value)) &&
				!(/eporting by/.test(value) && /diting by/.test(value)) &&
				!(/riting by/.test(value) && /diting by/.test(value))
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
				//Filters out snippets w/ strings in question
				!/are solely those of the author/.test(value) &&
				!/Share this story!/.test(value) &&
				!/Share it with a friend!/.test(value)
			);
		});

		return snippets;
	},
	slate: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/©/.test(snippets[i]) ||
				/Readers like you make our work possible/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Podcast Episode/.test(value)
			);
		});

		return snippets;
	},
	spectator: function(snippets) {
		return snippets;
	},
	techcrunch: function(snippets) {
		return snippets;
	},
	techradar: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Reviews Guarantee/.test(value) &&
				!/TechRadar is part of Future US Inc/.test(value) &&
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
	theatlantic: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/letters@theatlantic.com/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		return snippets;
	},
	theblaze: function(snippets) {
		return snippets;
	},
	thedailybeast: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
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

		return snippets;
	},
	theglobeandmail: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/Welcome to The Globe and Mail/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/view your reading history/.test(value) &&
				!/Find your bookmarks/.test(value) &&
				!/Audio for this article/.test(value) &&
				!/This translation has been automatically/.test(value) &&
				!/Full Disclaimer/.test(value) &&
				!(/first published/.test(value) && /20/.test(value)) &&
				!/Chief Magistrate will neither advise nor/.test(value) &&
				!/@globeandmail.com/.test(value) &&
				!/Sign up today./.test(value) &&
				!(/newsletter/.test(value) && /your inbox/.test(value))
			);
		});

		return snippets;
	},
	theguardian: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Last modified on/.test(value) &&
				!/guardianbookshop/.test(value) &&
				!/@theguardian.com/.test(value)
			);
		});

		return snippets;
	},
	thehill: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/The Hill 1625 K Street/.test(value) &&
				!(/Sign up/.test(value) && /newsletter/.test(value))
			);
		});

		return snippets;
	},
	theintercept: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/The Intercept is a First Look Media Company/.test(value) &&
				!/theintercept.com/.test(value)
			);
		});

		return snippets;
	},
	thenation: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/To submit a correction/.test(snippets[i]) ||
				/Sign up for our free daily newsletter/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/you consent to our use of cookies/.test(value) &&
				!/receive occasional promotional offers/.test(value) &&
				!/Subscribe now for/.test(value)
			);
		});

		return snippets;
	},
	thestar: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (/All rights reserved/.test(snippets[i])) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Reprints.com/.test(value) &&
				!/Copyright owned or licensed/.test(value)
			);
		});

		return snippets;
	},
	time: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/@time.com/.test(value)
			);
		});

		return snippets;
	},
	torontosun: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Visit our FAQ page/.test(value)
			);
		});

		return snippets;
	},
	ubyssey: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!((/AM/.test(value) || /PM/.test(value)) && /-/.test(value))
			);
		});

		return snippets;
	},
	usatoday: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/:\w/.test(value) && !/Click here /.test(value)
			);
		});

		return snippets;
	},
	vancouversun: function(snippets) {
		//If snippet encountered, delete all snippets after it
		for (let i = 0; i < snippets.length; i++) {
			if (
				/Postmedia is pleased to bring you/.test(snippets[i]) ||
				/www.postmedia.com/.test(snippets[i])
			) {
				snippets.splice(i, snippets.length - i);
				break;
			}
		}

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/\/ Vancouver Sun/.test(value) &&
				!(/Email/.test(value) && /@postmedia.com/.test(value))
			);
		});

		return snippets;
	},
	vanityfair: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
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
				//Filters out snippets w/ strings in question
				!(/Sign up/.test(value) && /newsletter/.test(value)) &&
				!(/Subscribe/.test(value) && /podcast/.test(value))
			);
		});

		return snippets;
	},
	washingtonpost: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/Local newsletters: Local headlines/.test(value) &&
				!/@postlocal/.test(value) &&
				!/Free daily updates/.test(value) &&
				!/5-Minute Fix/.test(value)
			);
		});

		return snippets;
	},
	washingtontimes: function(snippets) {
		//Splice out list of washingtontimes website categories
		snippets.splice(0, 100);

		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/TOP STORIES/.test(value)
			);
		});

		return snippets;
	},
	wired: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/WIRED is where tomorrow is realized/.test(value) &&
				!/Subscribe now./.test(value) &&
				!/mail@wired.com/.test(value) &&
				!/the retail links in our /.test(value)
			);
		});

		return snippets;
	},
	wsj: function(snippets) {
		snippets = snippets.filter(function(value) {
			return (
				//Filters out snippets w/ strings in question
				!/https:/.test(value) &&
				!/Opinion:/.test(value) &&
				!/English EditionEnglish/.test(value) &&
				!/WSJ Membership/.test(value) &&
				!/Contact Us/.test(value) &&
				!/Emails & Alerts/.test(value) &&
				!/AdsAdvertise/.test(value) &&
				!/ArchiveRegister/.test(value)
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

		return snippets;
	}
};
