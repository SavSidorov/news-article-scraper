HOW TO USE:

This project scrapes the info (title, url, date, snippets) from news websites.

Two approaches to the problem: general and specific. The general approach works for all websites, but not perfectly - you tend to get some junk in your snippets that's not part of the article itself. The specific approach works only for a select number of websites, but the snippets for each website are clean.

In either case, run "node main.js" in order to use the program.

The URL you're scraping can be changed at the top of the main.js file, for both approaches.

I included HTML from a sample CNN article for offline use. Uncomment the commented code at the top of main.js, and get rid of the axios request to use. 



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TESTED URLS WITH GENERAL SCRAPER
"https://www.foxnews.com/us/mormon-families-flee-mexico-arizona-cartel-massacre";
"https://cnn.com/2019/09/21/europe/ukraine-trump-analysis-intl/index.html";
"https://www.vox.com/future-perfect/2019/8/5/20750259/facebook-ai-mind-reading-brain-computer-interface";
"https://www.vanityfair.com/style/2019/11/kanye-west-christian-genius-billionaire";
"https://quillette.com/2019/09/21/why-has-kamala-harriss-campaign-fizzled/";
"https://news.yahoo.com/trump-jr-booed-off-stage-094157937.html";
"https://www.latimes.com/california/story/2019-11-10/chesa-boudin-is-new-district-attorney-in-san-francisco#nt=1col-7030col1-main";
"https://www.usatoday.com/story/news/politics/2019/11/11/supreme-court-hears-daca-challenge-700000-dreamers/2533001001/";
"https://abcnews.go.com/International/wireStory/hong-kong-protester-appears-shot-police-online-video-66900386?cid=clicksource_4380645_null_twopack_hed";

TESTED URLS WITH SPECIFIC SCRAPER
"https://cnn.com/2019/09/21/europe/ukraine-trump-analysis-intl/index.html";
"https://cnn.com/2019/11/11/asia/hong-kong-protests-dramatic-intl-hnk/index.html";
"https://cnn.com/2019/11/12/europe/russia-putin-trump-impeachment-intl/index.html";

"https://www.foxnews.com/opinion/kanye-west-church-jonathan-morris";
"https://www.foxnews.com/us/mormon-families-flee-mexico-arizona-cartel-massacre";

"https://www.foxbusiness.com/markets/stocks-trade-cautiously-ahead-of-trump-trade-speech";
"https://www.foxbusiness.com/economy/dow-30000-trump-aide-says-its-coming";

"https://news.yahoo.com/trump-impeachment-mac-thornberry-abc-this-week-165743982.html";
"https://news.yahoo.com/trump-jr-booed-off-stage-094157937.html";

"https://abcnews.go.com/Politics/president-jimmy-carter-admitted-hospital-brain-surgery/story?id=66926890&cid=clicksource_4380645_null_card_hed";
"https://abcnews.go.com/Politics/trump-impeachment-inquiry-testified-congress/story?id=66763043";
"https://abcnews.go.com/US/record-cold-hits-midwest-temperatures-plunge-east-coast/story?id=66935149";



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TODO
nytimes http://www.nytimes.com/
nbcnews http://www.nbcnews.com/
dailymail https://www.dailymail.co.uk/home/index.html
washingtonpost http://www.washingtonpost.com/
wsj http://www.wsj.com/
theguardian https://www.theguardian.com/
bbc http://news.bbc.co.uk/
axios
alternet
apnews
bloomberg
theblaze
breitbart
businessinsider
buzzfeed
buzzfeednews
cbc
cbsnews
csmonitor
ctvnews
dailywire
democracynow
thefederalist
forbes
globalnews
theglobeandmail
infowars
jacobinmag
macleans
metro.co.uk
motherjones
nationalreview
nypost     
newsmax
npr
politico
reuters
slate
spectator
rt
theatlantic
thedailybeast
dailycaller
economist
thehill
theintercept
thenation
newyorker
time
thestar
torontosun
wired
washingtontimes
huffpost