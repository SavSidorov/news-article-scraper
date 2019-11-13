const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const date = require("./date.js");
const snippets = require("./snippets.js");

const url =
	"https://www.buzzfeednews.com/article/skbaer/black-server-n-word-order-phoenix-breakfast-club";

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
	articleInfo.date = date.getDate($);
	articleInfo.snippets = snippets.getSnippets($, articleInfo.link);

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
