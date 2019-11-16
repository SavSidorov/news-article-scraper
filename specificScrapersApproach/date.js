//TODO: Revamp the way dates are fetched to make it more scalable and generalizable

module.exports = {
	getDate: function($) {
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
			19: $("time").text(),
			20: $('meta[name="dcterms.available"]').attr("content"),
			21: $('meta[name="dcterms.dateAccepted"]').attr("content"),
			22: $('meta[name="dcterms.submitted"]').attr("content"),
			23: $('meta[name="dcterms.issued"]').attr("content")
			// Add to this list to increase number of supported date tag variants
		};

		for (var property in dateFunctions) {
			date = dateFunctions[property];
			if (date != undefined) return date;
		}
		if (date == undefined) date = "";

		return date;
	}
};
