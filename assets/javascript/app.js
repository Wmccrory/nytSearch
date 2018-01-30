//NYT SEARCH//////////////////////////////////////////////////////////////////////

//Variable bank//////////////////////////////////////////////////////////////////
var queryUrl;			//API search URL
var searchTerm;			//User entered search term
var resultNumber;		//Number of results user wants to see
var startYear;			//Start year of publication date user wants to see
var endYear				//End year of publication date user wants to see

//Function bank////////////////////////////////////////////////////////////////

function articleSearch ()
{
	queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
				url += '?' + $.param({
				'api-key': "75f3bd9eb7124ba5b791e56be4009978",
				'q': searchTerm,
				'begin_date': startYear + "0101",
				'end_date': endYear + "0101",
});
};
//User progression (Function calls)///////////////////////////////////////////