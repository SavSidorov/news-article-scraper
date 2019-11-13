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

"https://www.cbsnews.com/live-news/trump-impeachment-house-intelligence-committee-hearings-2019-11-12-live-updates/";
"https://www.cbsnews.com/news/former-mcdonalds-worker-alleging-harassment-says-co-worker-touched-underage-employees-2019-11-12/";
"https://www.cbsnews.com/news/impeachment-hearings-house-democrats-announce-next-round-of-witnesses-set-to-testify-publicly-next-week/";
"https://www.cbsnews.com/news/trump-impeachment-inquiry-steve-bannon-says-pelosis-strategy-is-actually-quite-brilliant/";
"https://www.cbsnews.com/news/brianna-williams-arrested-taylor-rose-williams-missing-remains-found-alabama-search-for-florida-girl-today-2019-11-12/";

"https://www.ctvnews.ca/health/report-predicts-drug-resistance-likely-to-kill-400-000-canadians-by-2050-1.4681190";
"https://www.ctvnews.ca/world/trump-cancels-visit-to-u-s-cemetery-in-france-due-to-rain-1.4171846";
"https://www.ctvnews.ca/canada/two-year-old-pronounced-dead-after-flight-makes-emergency-landing-in-st-john-s-1.4682056";
"https://www.ctvnews.ca/politics/more-of-the-same-says-moe-on-lacklustre-meeting-with-trudeau-1.4681685";*
"https://www.ctvnews.ca/canada/porch-thief-crushes-boy-s-charitable-candy-dream-until-the-community-steps-up-1.4681946";

"https://www.dailywire.com/news/boston-university-student-group-triggered-by-ben-shapiro-speech-title-shapiro-responds";
"https://www.dailywire.com/news/a-disgrace-patrick-stewart-tells-french-audience-hes-embarrassed-by-brexit";
"https://www.dailywire.com/news/new-york-post-releases-cover-mocking-democrats-over-impeachment-charade";
"https://www.dailywire.com/news/kanye-to-appear-at-nations-biggest-megachurch-sunday-bring-his-choir";
"https://www.dailywire.com/news/hillary-continues-to-fuel-speculation-that-she-will-run-in-2020-with-new-remarks";

"https://www.forbes.com/sites/williampesek/2019/11/13/why-wework-was-top-tick-of-global-economic-bubble/#6d030ab92235";
"https://www.forbes.com/sites/bensin/2019/11/11/google-pixel-4-review-stubborn-hardware-decisions-hinder-otherwise-great-phone/#22e2f4142e3d";
"https://www.forbes.com/sites/yuwahedrickwong/2019/11/11/corporate-america-is-paying-for-trumps-trade-war/#2613259f1532";
"https://www.forbes.com/sites/sergeiklebnikov/2019/11/12/tesla-gigafactory-in-nevada-plagued-by-worker-injuries-report/#20e358a173ac";
"https://www.forbes.com/sites/stephenpope/2019/11/13/germany-risks-rolling-into-a-recession-despite-a-shimmer-of-stronger-sentiment/#3ae3547e3a22";

"https://www.vanityfair.com/news/2019/11/politico-founder-is-launching-a-tech-site";
"https://www.vanityfair.com/news/2019/11/john-bolton-gives-trump-a-taste-of-the-impeachment-pain-to-come";
"https://www.vanityfair.com/news/2019/11/trump-fire-inspector-general-michael-atkinson";
"https://www.vanityfair.com/hollywood/2019/11/dave-filoni-george-lucas-star-wars";
"https://www.vanityfair.com/hollywood/2019/10/john-legend-and-chrissy-teigen-cover-story";

"https://www.vox.com/future-perfect/2019/8/5/20750259/facebook-ai-mind-reading-brain-computer-interface";
"https://www.vox.com/2019/11/5/20914280/impeachment-trump-explained";
"https://www.vox.com/policy-and-politics/2019/11/12/20961371/daca-supreme-court-dreamers-gorsuch-kavanaugh";
"https://www.vox.com/2019/11/12/20960187/disney-plus-lineup-movies-tv-shows-launch-cult-classics";
"https://www.vox.com/science-and-health/2019/11/12/20950235/ok-boomer-kids-these-days-psychology";

"https://www.wired.com/story/how-to-watch-donald-trump-impeachment-hearings/";
"https://www.wired.com/story/meet-the-immigrants-who-took-on-amazon/";
"https://www.wired.com/story/disney-plus-power-launch/";
"https://www.wired.com/review/apple-airpods-pro/";
"https://www.wired.com/review/microsoft-surface-pro-x/";

"https://www.infowars.com/if-impeachment-fails-will-the-elite-crash-the-economy-to-prevent-four-more-years-of-trump/";
"https://www.infowars.com/watch-live-supreme-court-seeks-to-end-second-amendment-by-putting-gun-manufacturers-out-of-business/";
"https://www.infowars.com/hong-kong-riot-police-fire-tear-gas-at-university-campus/";*
"https://www.infowars.com/whistleblower-eric-ciaramella-hosted-2016-wh-meeting-ordering-ukraine-officials-to-drop-probe-into-hunter-biden/";*
"https://www.infowars.com/bernie-sanders-aoc-will-play-very-important-role-in-white-house-if-im-elected/";



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

https://thefederalist.com/
https://globalnews.ca/
https://jacobinmag.com/
https://www.politico.com/
https://metro.co.uk/
https://www.npr.org/
https://spectator.org/
https://www.rt.com/
https://www.thedailybeast.com/
https://dailycaller.com/
https://thehill.com/
https://torontosun.com/