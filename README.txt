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

"https://thefederalist.com/2019/11/12/pete-buttigieg-spent-one-week-tv-ads-iowa/";
"https://thefederalist.com/2019/11/12/democratic-sen-mazie-hirono-believe-in-climate-change-as-though-its-a-religion/";
"https://thefederalist.com/2019/11/12/the-mandalorian-is-already-the-crown-jewel-of-disney-plus/";
"https://thefederalist.com/2019/11/12/the-daily-northwestern-apology-is-a-harbinger/";
"https://thefederalist.com/2019/11/12/alex-vindman-is-living-breathing-proof-that-the-deep-state-exists-and-it-is-corrupt/";

"https://www.rt.com/op-ed/473269-bolivia-evo-morales-color-revolution/";
"https://www.rt.com/news/473260-israel-gaza-strikes-politics/";
"https://www.rt.com/op-ed/473274-northwestern-apology-journalism-traumatized-sessions/";
"https://www.rt.com/news/473292-hong-kong-attack-woman-video/";
"https://www.rt.com/news/473315-mars-changing-oxygen-levels-mystery/";

"https://www.npr.org/2019/11/13/776819671/house-holds-1st-open-hearing-in-trump-impeachment-inquiry";
"https://www.npr.org/2019/11/13/778602142/president-trump-hosts-turkeys-erdogan-despite-concerns-in-congress";
"https://www.npr.org/sections/health-shots/2019/11/13/778261164/with-few-new-drugs-to-treat-antibiotic-resistance-how-best-to-deploy-them";
"https://www.npr.org/2019/11/13/778545559/supreme-court-may-side-with-trump-on-dreamers";
"https://www.npr.org/2019/11/12/778542614/fbi-reports-dip-in-hate-crimes-but-rise-in-violence";*

"https://spectator.org/elizabeth-warren-makes-her-case-for-state-health-care-monopoly/";
"https://spectator.org/michael-brendan-doughertys-very-irish-story/";
"https://spectator.org/the-return-of-the-moron-vote/";
"https://spectator.org/who-gets-buried-at-the-kremlin-time-for-a-post-revolutionary-purge/";
"https://spectator.org/impeachment-vote-will-cost-these-dems-their-seats/";

"https://metro.co.uk/2019/11/13/boris-johnson-heckled-visits-flood-victims-south-yorkshire-11089792/";
"https://metro.co.uk/2019/11/12/cyclist-lying-across-four-train-seats-refuses-move-mum-baby-11087288/";
"https://metro.co.uk/2019/11/13/pictured-primark-security-guard-got-shoplifters-perform-sex-acts-silence-11088217/";
"https://metro.co.uk/2019/11/12/two-men-arrested-suspicion-terrorism-offences-11086930/";
"https://metro.co.uk/2019/11/12/holly-willoughby-isnt-letting-piers-morgan-steal-moment-gemma-collins-gets-cosy-alan-carr-entertaining-itv-palooza-red-carpet-11087447/";

"https://www.thedailybeast.com/ivanka-dad-dont-tweet-the-whistleblowers-name?ref=home";
"https://www.thedailybeast.com/behind-los-angeles-bitter-war-to-abolish-the-olympics-for-good?ref=home";
"https://www.thedailybeast.com/bara-jichova-tyson-set-out-to-expose-monogamy-as-a-sham-then-she-fell-in-love-with-her-subject?ref=home";
"https://www.thedailybeast.com/ukraine-wants-to-set-the-record-straight-on-taylor-testimony?ref=home";
"https://www.thedailybeast.com/jeff-garlin-weighs-in-on-the-great-fat-shaming-debate-between-bill-maher-and-james-corden";

"https://www.ubyssey.ca/blog/sand-in-bad-places/";
"https://www.ubyssey.ca/magazine/presence-of-mind/#resolve";
"https://www.ubyssey.ca/news/Rogers-UBC-5G-smart-campus-project-launches/";
"https://www.ubyssey.ca/news/staff-faculty-mental-health/";
"https://www.ubyssey.ca/blog/i-went-on-halloween-club-crawl/";

"https://www.politico.com/news/2019/11/13/impeachment-democrats-calculus-070401";
"https://www.politico.com/news/magazine/2019/11/13/impeachment-republicans-trump-bill-clinton-070389";
"https://www.politico.com/news/2019/11/13/donald-trump-impeachment-messaging-070124";
"https://www.politico.com/news/2019/11/13/poll-voters-impeachment-070311";
"https://www.politico.com/news/2019/11/12/mulvaney-impeachment-hearings-070342";

"https://globalnews.ca/news/6160099/don-cherry-defends-comments-hockey-night-in-canada/?utm_source=Other&utm_medium=MostPopular&utm_campaign=2014";
"https://globalnews.ca/news/6157812/don-cherry-you-people-rant-impact/?utm_source=Other&utm_medium=MostPopular&utm_campaign=2014";
"https://globalnews.ca/news/6161997/trudeau-blanchet-meet-parliament/";
"https://globalnews.ca/news/6158220/comparing-major-video-streaming-services-canada/?utm_source=Other&utm_medium=MostPopular&utm_campaign=2014";
"https://globalnews.ca/news/6066815/what-is-fatty-liver/?utm_source=Other&utm_medium=MostPopular&utm_campaign=2014";

"https://dailycaller.com/2019/11/13/paul-gosars-tweets-epstein-didnt-kill-himself/";
"https://dailycaller.com/2019/11/13/william-barr-fisa-report-imminent/";
"https://dailycaller.com/2019/11/13/donald-trump-jrs-the-view-interview/"; X 
"https://dailycaller.com/2019/11/07/starbucks-christmas-cups-merry-coffee/";
"https://dailycaller.com/2019/11/08/disney-amazon-fire-tv/";
"https://dailycaller.com/2019/11/13/rockets-israel-revenge-palestinian-death/";

"https://thehill.com/policy/healthcare/470337-bipartisan-senators-press-fda-tobacco-chief-on-status-of-vaping-ban";*
"https://thehill.com/changing-america/resilience/natural-disasters/470285-floods-in-venice-reach-highest-level-in-50";
"https://thehill.com/changing-america/respect/inclusion/468425-jane-goodall-on-humans-chimpanzees-and-lessons-learned";
"https://thehill.com/policy/technology/470289-facebook-says-it-took-action-against-millions-of-posts-over-hate-speech";
"https://thehill.com/homenews/administration/470389-trump-holds-chummy-meeting-with-turkeys-erdogan";

"https://techcrunch.com/2019/11/13/john-carmack-steps-down-at-oculus-to-pursue-ai-passion-project-before-i-get-too-old/";
"https://techcrunch.com/2019/11/13/messaging-app-wire-confirms-8-2m-raise-responds-to-privacy-concerns-after-moving-holding-company-to-the-us/";*
"https://techcrunch.com/2019/11/13/spacex-completes-key-crew-dragon-launch-system-static-test-fire/";
"https://techcrunch.com/2019/11/13/apple-music-introduces-a-replay-a-playlist-of-your-top-songs-of-the-year/";
"https://techcrunch.com/2019/11/13/github-launches-a-mobile-app-smarter-notifications-and-improved-code-search/";

"https://www.techradar.com/reviews/macbook-pro-16-inch-2019";
"https://www.techradar.com/news/disney-plus";
"https://www.techradar.com/news/tracker-blocking-browser-brave-comes-out-of-beta";
"https://www.techradar.com/reviews/amazon-echo-buds";
"https://www.techradar.com/news/here-are-the-top-three-disney-plus-titles-were-watching-right-now";

"https://torontosun.com/news/local-news/warmington-put-don-cherry-back-on-the-air-this-saturday";
"https://torontosun.com/news/world/hunter-sementilli-murder-echoes-1944-film-noir-classic";
"https://torontosun.com/news/world/isis-matchmaker-will-be-deported-to-france-and-jailed";
"https://torontosun.com/opinion/columnists/bonokoski-bland-peter-mackay-throws-zingers-then-retreats";
"https://torontosun.com/news/local-news/city-ready-to-tackle-winter-tory";



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TODO:
http://www.nytimes.com/
http://www.nbcnews.com/
https://www.dailymail.co.uk/home/index.html
http://www.washingtonpost.com/
http://www.wsj.com/
https://www.theguardian.com/
http://news.bbc.co.uk/
https://www.huffpost.com/