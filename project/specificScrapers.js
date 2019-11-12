//SPECIFIC SCRAPERS

const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const filterMatchedSnippets = require("./filterMatchedSnippets.js");

const url =
	"https://news.yahoo.com/trump-impeachment-mac-thornberry-abc-this-week-165743982.html";

//FIXME: for offline use only with example cnn.html file:
//const html = fs.readFileSync("cnn.html", "utf8");
//parseData(html);

axios.get(url).then(
	response => {
		if (response.status === 200) {
			parseData(response.data);
		}
	},
	error => console.log(error)
);

function parseData(html) {
	const $ = cheerio.load(html);
	const articleInfo = {
		title: "",
		link: "",
		date: "",
		snippets: []
	};

	articleInfo.title = getTitle($);
	articleInfo.link = getLink($);
	//TODO: Move snippets and dates to their own files
	articleInfo.date = getDate($);
	articleInfo.snippets = getSnippets($, articleInfo.link);

	fs.writeFile("output.json", JSON.stringify(articleInfo, null, 4), err => {
		console.log("File successfully written!");
	});
}

function getTitle($) {
	let title = $('meta[property="og:title"]').attr("content");
	if (title == undefined) title = "";

	return title;
}

function getLink($) {
	let link = $('meta[property="og:url"]').attr("content");
	if (link == undefined) link = "";

	return link;
}

function getDate($) {
	let date = undefined;
	const dateFunctions = {
		0: $('meta[property="article:published_time"]').attr("content"),
		1: $("time").attr("datetime"),
		2: $('meta[itemprop="datePublished"]').attr("content"),
		3: $('meta[property="article:published"]').attr("content"),
		4: $('time[itemprop="datePublished"]').attr("datetime"),
		5: $('time[itemprop="datePublished"]').attr("content"),
		6: $('meta[name="dcterms.created"]').attr("content"),
		7: $('meta[name="sailthru.date"]').attr("content"),
		8: $('meta[name="pub_date"]').attr("content"),
		9: $('meta[name="published_time_telegram"]').attr("content"),
		10: $('meta[name="parsely-pub-date"]').attr("content"),
		11: $('meta[property="og:article:published_time"]').attr("content"),
		12: $('meta[property="lastPublishedDate"]').attr("content"),
		13: $('time[data-moment-preface="Published"]').attr("datetime"),
		14: $('time[class="po-hr-fl__date"]').text(),
		15: $('time[class="uhd9ir-0 lkqtha"]').attr("datetime"),
		16: $('time[class="article-header__meta-pubdate separator"]').attr(
			"title"
		),
		17: $('time[id="date-published"]').attr("datetime"),
		18: $('time[itemprop="dateCreated"]').attr("datetime"),
		19: $("time").text()
		// Add to this list to increase number of supported date tag variants
	};

	for (var property in dateFunctions) {
		date = dateFunctions[property];
		if (date != undefined) return date;
	}
	if (date == undefined) date = "";

	return date;
}

function getSnippets($, url) {
	let snippets = [];
	const supportedUrls = [
		"cnn",
		"foxnews",
		"foxbusiness",
		"yahoo"
		//TODO:
		//"latimes",
		//"usatoday",
		//"abcnews",
		//"nytimes",
		//"nbcnews",
		//"dailymail",
		//"washingtonpost",
		//"wsj",
		//"theguardian",
		//"bbc",
		//"vox",
		//"vanityfair"
	];

	const snippetTags = [
		"p",
		'div[class="zn-body__paragraph speakable"]',
		'div[class="zn-body__paragraph"]'
		// Add to this list to increase number of supported snippet tag variants
	];

	//Pull snippets from html
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
		console.log("Site not supported");
		snippets = [];
	}

	return formatSnippets(snippets);
}

function formatSnippets(snippets) {
	for (let i = 0; i < snippets.length; i++) {
		snippets[i] = snippets[i].replace(/\n/g, "");
		snippets[i] = snippets[i].replace(/\t/g, " ");
		snippets[i] = snippets[i].replace(/\s+/g, " ");
		snippets[i] = snippets[i].trim();
	}

	return snippets;
}
