HOW TO USE:

This project scrapes the info (title, url, date, snippets) from news websites.

Run "node main.js" in order to use the program.

The URL you're scraping can be changed at the top of the main.js file, for both approaches.

I included HTML from a sample CNN article for offline use. Uncomment the commented code at the top of main.js, and get rid of the axios request to use.

SUPPORTED WEBSITES:
    "abcnews",
    "alternet",
    "apnews",
    "axios",
    "bbc",
    "breitbart",
    "businessinsider",
    "buzzfeednews",
    "cbc",
    "cbsnews",
    "cnet",
    "cnn",
    "csmonitor",
    "ctvnews",
    "dailycaller",
    "dailymail",
    "dailywire",
    "democracynow",
    "forbes",
    "foxbusiness",
    "foxnews",
    "globalnews",
    "infowars",
    "latimes",
    "macleans",
    "metro",
    "motherjones",
    "nationalreview",
    "nbcnews",
    "npr",
    "nypost",
    "nytimes",
    "politico",
    "rt",
    "spectator",
    "techcrunch",
    "techradar",
    "theblaze",
    "thedailybeast",
    "thefederalist",
    "theglobeandmail",
    "theguardian",
    "thehill",
    "time",
    "torontosun",
    "ubyssey",
    "usatoday",
    "vanityfair",
    "vox",
    "washingtonpost",
    "wired",
    "wsj",
    "yahoo"



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
URLS TESTED:
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
"https://www.latimes.com/california/story/2019-11-06/homeless-housing-board-and-care-homes-mental-illness";

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

"https://www.nytimes.com/2015/01/11/style/36-questions-that-lead-to-love.html";
"https://www.nytimes.com/2019/11/15/arts/television/trump-tweet-hearing.html?action=click&module=Top%20Stories&pgtype=Homepage";*
"https://www.nytimes.com/2019/11/15/us/politics/impeachment-hearing-yovanovitch.html?action=click&module=Top%20Stories&pgtype=Homepage";
"https://www.nytimes.com/2019/11/15/us/trump-pardons.html?action=click&module=Top%20Stories&pgtype=Homepage";
"https://www.nytimes.com/2019/11/15/us/politics/roger-stone-trial-guilty.html?action=click&module=Top%20Stories&pgtype=Homepage";

"https://www.cnet.com/how-to/you-can-download-disney-plus-tv-shows-and-movies-to-watch-offline/";
"https://www.cnet.com/news/hottest-christmas-toys-for-2019/";
"https://www.cnet.com/videos/motorola-razr-is-futuristic-and-familiar/";
"https://www.cnet.com/news/every-upcoming-marvel-movie-and-tv-show-in-mcu-phase-4-beyond/";
"https://www.cnet.com/news/best-soundbars-for-2019/";

"https://time.com/5730180/usc-student-deaths/";
"https://time.com/5722795/rodney-reed-innocent-execution-protests/";
"https://time.com/5728342/saugus-high-school-shooting/";
"https://time.com/5730618/venice-high-tides-flooding-vulnerability/";
"https://time.com/5730484/flight-attendants-boeing-737-max/";

"https://www.nbcnews.com/politics/trump-impeachment-inquiry/holmes-gave-damning-testimony-trump-sondland-call-democratic-lawmakers-says-n1084071";
"https://www.nbcnews.com/news/military/trump-dismisses-murder-charge-against-green-beret-pardons-army-officer-n1079941";
"https://www.nbcnews.com/politics/donald-trump/devastating-day-trump-s-presidency-came-sharp-focus-congress-white-n1083991";
"https://www.nbcnews.com/news/world/israel-says-it-probing-harm-civilians-deadly-gaza-airstrike-n1084151";
"https://www.nbcnews.com/news/us-news/man-young-boy-shot-new-jersey-high-school-football-game-n1084146";

"https://www.dailymail.co.uk/news/article-7692371/Andrew-says-felt-staying-billionaire-paedophile-Jeffrey-Epstein-right-thing-do.html";
"https://www.dailymail.co.uk/news/article-7692333/Fire-alarms-didnt-sound-Bolton-University-flats-fire-flames-engulfed-six-storey-building.html";
"https://www.dailymail.co.uk/news/article-7691931/Lotto-lout-Michael-Carroll-reveals-working-10-hour-coalman.html";
"https://www.dailymail.co.uk/news/article-7691905/Jeremy-Corbyn-face-landslide-election-defeat-says-pollster.html";
"https://www.dailymail.co.uk/news/article-7691149/Kate-Middletons-private-secretary-quits-post-two-years-working-future-queen.html";

"https://www.bbc.com/news/world-asia-50013478";*
"https://www.bbc.com/news/world-middle-east-50444429";
"https://www.bbc.com/news/world-us-canada-50428537";
"https://www.bbc.com/news/world-us-canada-50441868";
"https://www.bbc.com/news/world-us-canada-50266957";

"https://www.washingtonpost.com/local/public-safety/roger-stone-jury-weighs-evidence-and-a-defense-move-to-make-case-about-mueller/2019/11/15/554fff5a-06ff-11ea-8292-c46ee8cb3dce_story.html";
"https://www.washingtonpost.com/politics/trump-attacks-ambassador-even-as-she-describes-feeling-threatened-by-him/2019/11/15/c14eefaa-07bc-11ea-8ac0-0810ed197c7e_story.html";
"https://www.washingtonpost.com/politics/trumps-doral-resort-was-a-last-minute-addition-in-search-for-g-7-site-newly-released-email-shows/2019/11/15/f39056a0-07fa-11ea-8ac0-0810ed197c7e_story.html";
(need subscription to view more WaPo articles)

"https://www.wsj.com/articles/struggling-farmers-are-key-to-trumps-hopes-in-minnesota-11573880460?mod=hp_lead_pos5";
"https://www.wsj.com/articles/elizabeth-warrens-tax-plan-would-bring-rates-over-100-for-some-11573819200?mod=hp_lead_pos9";
"https://www.wsj.com/articles/amazon-loss-stings-but-long-island-city-real-estate-shrugs-it-off-11573900200?mod=hp_lead_pos8";
"https://www.wsj.com/articles/when-the-u-s-tried-to-control-hurricanes-11573880461?mod=hp_lead_pos10";
"https://www.wsj.com/articles/disney-severs-ties-with-youtube-star-pewdiepie-after-anti-semitic-posts-1487034533";
(Note: can't view full articles without subscription)

"https://www.theguardian.com/world/2019/nov/16/three-more-altar-boys-claim-they-were-abused-by-priests-in-vatican";
"https://www.theguardian.com/politics/2019/nov/15/jeremy-corbyn-to-launch-clause-v-workers-rights-document";
"https://www.theguardian.com/music/2019/nov/16/friendship-intimate-on-all-levels-whitney-houston-robyn-crawford-addiction-fame-secrecy";
"https://www.theguardian.com/books/2019/nov/16/hillary-and-chelsea-clinton-we-cannot-give-in-thats-how-they-win";
"https://www.theguardian.com/lifeandstyle/2019/nov/16/george-takei-dream-dinner-party-star-trek-colleagues-except-one";

"https://www.axios.com/beer-consumption-down-uncertain-future-a709e5dd-97aa-4185-99b0-7529e2b3499e.html";
"https://www.axios.com/bloomberg-2020-decision-ad-campaign-671a5d60-dd6a-4fdf-9821-8be90a10b60c.html";
"https://www.axios.com/david-holmes-confirms-trump-asked-sondland-ukraine-investigation-4c20f887-d79d-4bc4-8c73-d4fdc0dc91ce.html";
"https://www.axios.com/trump-associates-convicted-mueller-investigations-206295a1-5abc-4573-be25-4da19d9adcc9.html";
"https://www.axios.com/dow-closes-28000-first-time-ever-a69aeecb-a9c2-44f4-a432-c126d6aee273.html";

"https://www.breitbart.com/clips/2019/11/15/pelosi-trump-attacked-yovanovitch-partly-because-of-his-insecurity-as-an-impostor/";
"https://www.breitbart.com/health/2019/11/15/texas-teen-helps-save-homeless-man-trapped-inside-manhole/";
"https://www.breitbart.com/politics/2019/11/15/prince-andrew-i-have-no-recollection-of-ever-meeting-epstein-victim-who-named-him-in-underage-sex-ring/";
"https://www.breitbart.com/entertainment/2019/11/15/taylor-swift-accused-of-using-fanbase-in-calculated-manner-that-endangers-record-labels-employees/";
"https://www.breitbart.com/politics/2019/11/15/roger-stone-found-guilty-of-all-7-charges-brought-by-mueller-probe/";

"https://www.businessinsider.com/prince-andrew-suggests-virginia-roberts-epstein-photo-is-fake-2019-11";
"https://www.businessinsider.com/federal-study-shows-that-some-heart-surgeries-arent-needed-2019-11";
"https://www.businessinsider.com/mcdonalds-employees-were-shocked-by-ceos-termination-2019-11";
"https://www.businessinsider.com/fox-news-and-cnn-covered-trump-impeachment-hearings-differently-2019-11";
"https://www.businessinsider.com/spacex-starlink-satellites-risks-astronomy-space-junk-2019-11";

"https://www.cbc.ca/news/canada/prince-edward-island/pei-value-of-piano-1.5359491";
"https://www.cbc.ca/news/health/cannabinoid-hyperemesis-syndrome-underdiagnosed-canada-1.5362007";
"https://www.cbc.ca/sports/olympics/wada-20th-anniversary-russia-1.5362355";
"https://www.cbc.ca/news/technology/bloodsuckers-1.5361074";**
"https://www.cbc.ca/news/world/mark-sandy-white-house-budget-official-testimony-impeachment-robe-1.5362504";

"https://www.csmonitor.com/USA/Politics/2019/1115/Who-can-win-in-2020-Voters-shift-focus-toward-centrists";
"https://www.csmonitor.com/World/Asia-Pacific/2019/1114/Behind-Hong-Kong-s-resolve-Locals-view-of-a-city-under-siege";
"https://www.csmonitor.com/Science/2019/1115/Mini-but-mighty-How-microbes-make-the-world";
"https://www.csmonitor.com/USA/Education/2019/1115/Just-the-facts-but-whose-facts-College-newspapers-face-student-ire";
"https://www.csmonitor.com/USA/Politics/2019/1114/My-dear-friend-Why-Trump-Erdogan-ties-endure";

"https://www.democracynow.org/2019/11/15/headlines/two_killed_as_16_year_old_student_opens_fire_at_la_county_high_school";
"https://www.democracynow.org/2019/11/15/headlines/el_paso_walmart_reopens_three_months_after_massacre_by_racist_gunman";
"https://www.democracynow.org/2019/11/15/headlines/house_speaker_pelosi_accuses_trump_of_bribery_an_impeachable_offense";
"https://www.democracynow.org/2019/11/11/should_first_primaries_be_in_whitest";
"https://www.democracynow.org/2019/11/15/headlines/climate_activist_greta_thunberg_sets_sail_for_europe";

"https://www.theglobeandmail.com/sports/article-maclean-calls-first-hockey-night-without-cherry-the-end-of-an-era/";
"https://www.theglobeandmail.com/canada/article-vaping-advertising-marketing-investigation/";
"https://www.theglobeandmail.com/life/parenting/article-how-do-i-approach-the-subject-of-vaping-with-my-son/";
"https://www.theglobeandmail.com/business/article-alberta-bc-make-the-case-for-canadian-natural-gas-in-asia/";
"https://www.theglobeandmail.com/world/article-huge-fires-blaze-in-hong-kong-as-protesters-unleash-stash-of-petrol/";

"https://www.macleans.ca/politics/worldpolitics/donald-trump-is-a-big-fan-of-erdogan-noted-global-tough-guy/";
"https://www.macleans.ca/news/world/as-protests-deepen-in-iraq-canada-is-caught-in-the-middle/";
"https://www.macleans.ca/politics/ottawa/this-whole-national-unity-thing-is-going-swimmingly-politics-insider/";
"https://www.macleans.ca/culture/television/the-crown-season-three-a-preview-of-all-10-episodes/";
"https://www.macleans.ca/politics/ottawa/blanchet-to-wexiters-no-separatist-tips-for-you-politics-insider/";

"https://www.motherjones.com/impeachment/2019/11/bill-barr-trump-federalist-society-speech-reaction/";
"https://www.motherjones.com/politics/2019/11/colin-kaepernick-nfl-roger-goodell-workout-yikes-football/";
"https://www.motherjones.com/politics/2019/11/rudy-giuliani-bad-lawyer/";
"https://www.motherjones.com/politics/2019/11/new-york-times-china-leaks-crackdown-muslims-uighurs-xi/";
"https://www.motherjones.com/impeachment/2019/11/new-trump-ukraine-call-transcript-raises-more-questions/";

"https://www.nationalreview.com/2019/11/what-do-republican-voters-want/";
"https://www.nationalreview.com/2019/11/book-review-serotonin-michel-houllebecq-sociopolitical-moment/";
"https://www.nationalreview.com/2019/11/theater-review-heroes-of-the-fourth-turning-dramatizes-crunchy-conservatives/";
"https://www.nationalreview.com/corner/corbyn-trump-and-power/";

"https://nypost.com/2019/11/16/prince-andrew-says-he-couldnt-sweat-in-attempt-to-debunk-epstein-accusers-claim/";*
"https://nypost.com/2019/11/16/colin-kaepernicks-nfl-workout-last-minute-change-causes-chaos/";*
"https://nypost.com/2019/11/16/shocking-video-shows-moment-car-driven-by-nypd-officer-garman-chen-crashes-on-fdr-drive/";*
"https://nypost.com/2019/11/16/al-sharpton-gets-1m-in-pay-from-his-own-charity/";*
"https://nypost.com/2019/11/16/el-chapos-wife-emma-coronel-aispuro-makes-classy-debut-on-on-vh1s-cartel-crew/";*



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TODO:
newsmax
reuters
slate
theatlantic
economist
theintercept
thenation
newyorker
thestar
washingtontimes

https://www.bloomberg.com/news ***
https://www.huffpost.com/ ***