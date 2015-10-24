var React = require('react'),
	FeedForm = require('./FeedForm'),
	FeedList = require('./FeedList'),
	ShowAddButton = require('./ShowAddButton');

var Feed = React.createClass({

	getInitialState: function(){
		var FEED_ITEMS = [
			{ key: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49 },
			{ key: '2', title: 'JavaScript is fun', description: 'Lexical scoping FTW', voteCount: 34},
			{ key: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15},
		];
		return {
			items: FEED_ITEMS,
			formDisplayed: false
		}
	},

	onNewItem: function(newItem){
		var newItems = this.state.items.concat([newItem]);

		this.setState({
			items: newItems,
			formDisplayed: false
		});
	},

	onToggleForm: function(){
		this.setState({
			formDisplayed: !this.state.formDisplayed
		});
	},

	render: function(){
		return(
			<div>

				<div className="container">
					<ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
				</div>

				<FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />

				<FeedList items={this.state.items} />

			</div>
		);
	}
});

module.exports = Feed;