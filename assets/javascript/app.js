//NYT SEARCH//////////////////////////////////////////////////////////////////////

//Variable bank//////////////////////////////////////////////////////////////////
var queryUrl;			//API search URL
var searchTerm = "Africa";			//User entered search term
var resultNumber = 2;		//Number of results user wants to see
var startYear = 1987;			//Start year of publication date user wants to see
var endYear	= 2016;			//End year of publication date user wants to see
var results				//results from AJAX call

//var articleName		//Article name to be displayed

//Function bank////////////////////////////////////////////////////////////////

function articleSearch ()
{
	queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	queryUrl += '?' + $.param({
				'api-key': "75f3bd9eb7124ba5b791e56be4009978",
				'q': searchTerm,
				'begin_date': startYear + "0101",
				'end_date': endYear + "1231"
				});

	$.ajax({
			url: queryUrl,
			method: "GET"
	})
    .then(function(results) 
    {
    	console.log(results);
        for (i = 0; i < resultNumber; i++) {
        	var articleName = results.response.docs[i].headline.main; + "</a>"
        	var articleUrl = "Article Name: " + "<a href='" + results.response.docs[i].web_url + "'>";
        	var articleAuthor = "Article author: " + results.response.docs[i].byline.original
        	console.log(articleName);
        	console.log(articleUrl);
        	console.log(articleAuthor);
        	$("#displayResults").append(articleUrl + articleName + "<br>");
        } 
	});
}
//User progression (Function calls)///////////////////////////////////////////

$("#testButton").on("click", function () {
	articleSearch();
	console.log(queryUrl);
});