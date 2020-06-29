import React from 'react';

export default class StoryDashboard extends React.Component {
	render(){
		return(
			
		)
	}
}

Making single API call and logging the result

axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
			.then( result => console.log("API data", result));