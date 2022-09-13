
function getAPIRecipe () {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '49bd2d9a87msh820cee85c9b73abp1a58c4jsnafb238f3371d',
			'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
		}
	};
	
	fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

}

function getAPITranslate () {
	const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '49bd2d9a87msh820cee85c9b73abp1a58c4jsnafb238f3371d',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams

//  Look up encodedParams above
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}


getAPIRecipe();
getAPITranslate();