HOW TO USE:

This project scrapes the info (title, url, date, snippets) from news websites.

Two approaches to the problem: general and specific. The general approach works for all websites, but not perfectly - you tend to get some junk in your snippets that's not part of the article itself. The specific approach works only for a select number of websites, but the snippets for each website are clean.

In either case, run "node main.js" in order to use the program.

The URL you're scraping can be changed at the top of the main.js file, for both approaches.

I included HTML from a sample CNN article for offline use. Uncomment the commented code at the top of main.js, and get rid of the axios request to use. 



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
URLS TESTED WITH GENERAL SCRAPER:
"https://www.foxnews.com/us/mormon-families-flee-mexico-arizona-cartel-massacre";
"https://cnn.com/2019/09/21/europe/ukraine-trump-analysis-intl/index.html";
"https://www.vox.com/future-perfect/2019/8/5/20750259/facebook-ai-mind-reading-brain-computer-interface";
"https://www.vanityfair.com/style/2019/11/kanye-west-christian-genius-billionaire";
"https://quillette.com/2019/09/21/why-has-kamala-harriss-campaign-fizzled/";
"https://news.yahoo.com/trump-jr-booed-off-stage-094157937.html";
"https://www.latimes.com/california/story/2019-11-10/chesa-boudin-is-new-district-attorney-in-san-francisco#nt=1col-7030col1-main";
"https://www.usatoday.com/story/news/politics/2019/11/11/supreme-court-hears-daca-challenge-700000-dreamers/2533001001/";
"https://abcnews.go.com/International/wireStory/hong-kong-protester-appears-shot-police-online-video-66900386?cid=clicksource_4380645_null_twopack_hed";

URLS TESTED WITH SPECIFIC SCRAPER:
"https://cnn.com/2019/09/21/europe/ukraine-trump-analysis-intl/index.html";
"https://cnn.com/2019/11/11/asia/hong-kong-protests-dramatic-intl-hnk/index.html";
"https://cnn.com/2019/11/12/europe/russia-putin-trump-impeachment-intl/index.html";
"https://edition.cnn.com/2019/11/12/uk/hillary-clinton-russia-report-uk-gbr-intl/index.html";
"https://edition.cnn.com/2019/11/08/opinions/robert-redford-paris-accord-opinion/index.html?iid=ob_article_organicsidebar_expansion";

"https://news.yahoo.com/trump-impeachment-mac-thornberry-abc-this-week-165743982.html";
"https://news.yahoo.com/trump-jr-booed-off-stage-094157937.html";
"https://news.yahoo.com/trump-impeachment-mac-thornberry-abc-this-week-165743982.html";
"https://news.yahoo.com/trump-fighter-jim-jordan-likely-wont-get-much-airtime-in-impeachment-hearings-164940687.html";
"https://news.yahoo.com/at-an-iowa-rally-progressive-voters-already-talk-about-an-ocasio-cortez-presidency-141839308.html";

"https://abcnews.go.com/Politics/president-jimmy-carter-admitted-hospital-brain-surgery/story?id=66926890&cid=clicksource_4380645_null_card_hed";
"https://abcnews.go.com/Politics/trump-impeachment-inquiry-testified-congress/story?id=66763043";
"https://abcnews.go.com/US/record-cold-hits-midwest-temperatures-plunge-east-coast/story?id=66935149";
"https://abcnews.go.com/US/start-here-supreme-court-weighs-daca-case-trump-mulls/story?id=66911348";
"https://abcnews.go.com/Politics/note-obama-legacy-tested-court-campaign-trail/story?id=66917286";

"https://www.foxnews.com/opinion/kanye-west-church-jonathan-morris";
"https://www.foxnews.com/us/mormon-families-flee-mexico-arizona-cartel-massacre";
"https://www.foxnews.com/politics/hillary-clinton-many-people-2020-democratic-primary-candidate";
"https://www.foxnews.com/entertainment/pamela-anderson-donald-trump-melania-throwback";
"https://www.foxnews.com/politics/buttigieg-iowa-surge-poll";

"https://www.foxbusiness.com/markets/stocks-trade-cautiously-ahead-of-trump-trade-speech";
"https://www.foxbusiness.com/economy/dow-30000-trump-aide-says-its-coming";
"https://www.foxbusiness.com/money/the-godfather-of-tennessee-whiskey-and-the-powerhouse-ceo-behind-the-company";
"https://www.foxbusiness.com/money/trump-cutting-middle-class-taxes";
"https://www.foxbusiness.com/markets/steve-forbes-private-equity-job-creation-liberals-conveniently-overlook";

"https://www.latimes.com/science/story/2019-11-12/california-butterflies-scientist-art-shapiro";
"https://www.latimes.com/california/story/2019-11-12/conception-boat-fire-coast-guard-ntsb-recommendations";
"https://www.latimes.com/politics/story/2019-11-12/supreme-court-arguments-about-dreamers-fate";
"https://www.latimes.com/california/story/2019-11-12/koreatown-developer-lawsuit";
"https://www.latimes.com/california/story/2019-11-12/rapper-who-collaborated-with-snoop";

"https://www.usatoday.com/story/news/politics/2019/11/12/trump-anonymous-book-author-warning-civil-war/2575090001/";
"https://www.usatoday.com/story/money/investing/2019/11/12/apple-iphone-subscription-ceo-tim-cook-revenue-earnings/40585857/";
"https://www.usatoday.com/story/sports/ncaaf/pac12/2019/11/12/colorado-buffalo-mascot-ralphie-v-must-retire-speed/2579899001/";
"https://www.usatoday.com/story/news/politics/2019/11/12/anonymous-book-excerpts-trump-putin-pence-hillary-migrants/2576958001/";
"https://www.usatoday.com/story/sports/nhl/columnist/kevinallen/2019/11/11/don-cherry-popular-analyst-went-too-far-racist-remark/2569566001/?utm_source=taboola&utm_medium=exchange&utm_content=sports";

"https://www.alternet.org/2019/11/how-trump-supporters-justify-supporting-the-president-in-the-full-knowledge-that-hes-a-criminal/";
"https://www.alternet.org/2019/11/what-zelensky-knew-the-devastating-and-darkly-ironic-impact-of-trumps-attempt-to-bribe-ukraine/";
"https://www.alternet.org/2019/11/this-is-a-very-strong-case-of-bribery-democrat-jackie-speier-explains-why-the-evidence-against-trump-is-very-simple/";
"https://www.alternet.org/2019/11/republicans-opening-salvo-on-impeachment-shows-they-think-americans-are-totally-ignorant/";*
"https://www.alternet.org/2019/11/trumps-shameless-disinformation-puts-democrats-in-a-bind-and-could-trigger-the-unraveling-of-civil-society/";

"https://apnews.com/77645ee9804c4056a9a6e42e64cb755a";
"https://apnews.com/1f43d4e272994e9ca321714c3974eac3";
"https://apnews.com/015702afdb4d4fbf85cf5070cd2c6824";
"https://apnews.com/a6fe66048f7f450d8d73dfaf2d5ed5f8";
"https://apnews.com/b97e438e84a84aae8e46bba919b7c9b9";

"https://www.theblaze.com/news/megan-rapinoe-hails-colin-kaepernick-in-award-speech-says-white-supremacy-has-kept-him-off-the-field";
"https://www.theblaze.com/news/ellie-goulding-threatens-to-cancel-nfl-show-over-gay-marriage";
"https://www.theblaze.com/news/hillary-clinton-claims-many-many-many-people-are-pressuring-her-to-run-for-president-again-in-2020";
"https://www.theblaze.com/news/lutheran-pastors-wife-rejoices-that-transgender-daughter-12-just-got-life-affirming-hormone-blocking-implant";
"https://www.theblaze.com/news/dershowitz-democrats-making-up-crimes";

"https://www.buzzfeednews.com/article/claudiakoerner/youtuber-charged-child-abuse-fantastic-adventures-died";
"https://www.buzzfeednews.com/article/rosalindadams/hong-kong-university-clash-police-battleground?ref=bfnsplash";
"https://www.buzzfeednews.com/article/skbaer/black-server-n-word-order-phoenix-breakfast-club";
"https://www.buzzfeednews.com/article/ellievhall/fbi-violent-hate-crimes-race-religion-latino";
"https://www.buzzfeednews.com/article/ryanmac/zuckerberg-musically-tiktok-china-facebook";



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TODO:
nytimes http://www.nytimes.com/
nbcnews http://www.nbcnews.com/
dailymail https://www.dailymail.co.uk/home/index.html
washingtonpost http://www.washingtonpost.com/
wsj http://www.wsj.com/
theguardian https://www.theguardian.com/
bbc http://news.bbc.co.uk/
huffpost https://www.huffpost.com/

https://www.cbsnews.com/
https://www.ctvnews.ca/
https://www.dailywire.com/
https://www.forbes.com/#43694a992254
https://thefederalist.com/
https://www.infowars.com/
https://globalnews.ca/
https://jacobinmag.com/
https://www.politico.com/
https://metro.co.uk/
https://www.npr.org/
https://slate.com/
https://spectator.org/
https://www.rt.com/
https://www.theatlantic.com/
https://www.thedailybeast.com/
https://dailycaller.com/
https://thehill.com/
https://torontosun.com/
https://www.vanityfair.com/
https://www.wired.com/
https://www.vox.com/