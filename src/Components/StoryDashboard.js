import React from 'react';
import axios from 'axios';

export default class StoryDashboard extends React.Component {

	state ={
		stories:[]
	}

	componentDidMount(){
		axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
			.then( result => console.log("Top Stories", result));
	}

	handleAPIcall =() => {
		axios.get("https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty")
			.then( result => console.log("JOB Stories", result));
	}

	render(){
		return(
			<div>
				STORIES
				<button onClick={this.handleAPIcall}> API CAll</button>
				<div></div>
			</div>
		)
	}
}

// HW 
// -------------------------
// setstate after api call

// display the data in ur div using map