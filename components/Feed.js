var React = require('react'),
	FeedForm = require('./FeedForm'),
	FeedList = require('./FeedList'),
	ShowAddButton = require('./ShowAddButton'),
	_ = require('lodash');

var Feed = React.createClass({

	getInitialState: function(){
		var FEED_ITEMS = [
			{ myKey: 0, title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49 },
			{ myKey: 1, title: 'JavaScript is fun', description: 'Lexical scoping FTW', voteCount: 34},
			{ myKey: 2, title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15}
		];
		return {
			items: FEED_ITEMS,
			formDisplayed: false
		}
	},

	onNewItem: function(newItem){
		newItem.myKey = this.state.items.length;

		var newItems = this.state.items.concat([newItem]);

		console.log(this.state.items, [newItems]);

		this.setState({
			items: newItems,
			formDisplayed: false
		});
	},

	onVote: function(item){
		var items = _.uniq(this.state.items);

		var index = _.findIndex(items, function(feedItems){
			return feedItems.myKey === item.myKey;
		});

		items[index] = item;

		var newItems = items;

		this.setState({
			items: newItems
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

				<FeedList items={this.state.items} onVote={this.onVote} />

			</div>
		);
	}
});

module.exports = Feed;