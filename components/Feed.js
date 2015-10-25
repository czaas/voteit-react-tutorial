var React = require('react'),
	FeedForm = require('./FeedForm'),
	FeedList = require('./FeedList'),
	ShowAddButton = require('./ShowAddButton'),
	_ = require('lodash'),
	Firebase = require('firebase');

var Feed = React.createClass({

	loadData: function(){
		var ref = new Firebase('https://burning-heat-7998.firebaseio.com/feed');

		ref.on('value', function(snapshot){
			var items = [];
			snapshot.forEach(function(itemSnapshot){
				var item = itemSnapshot.val();
				item.key = itemSnapshot.name();

				items.push(item);
			});

			this.setState({
				items: items
			});
		}.bind(this));
	},

	componentDidMount: function(){
		this.loadData();
	},

	getInitialState: function(){
		return {
			items: [],
			formDisplayed: false
		}
	},

	onNewItem: function(newItem){
		var ref = new Firebase('https://burning-heat-7998.firebaseio.com/feed');
		ref.push(newItem);
	},

	onVote: function(item){
		var ref = new Firebase('https://burning-heat-7998.firebaseio.com/feed').child(item.key);

		ref.update(item);
		// var items = _.uniq(this.state.items);

		// var index = _.findIndex(items, function(feedItems){
		// 	return feedItems.myKey === item.myKey;
		// });

		// items[index] = item;

		// var newItems = items;

		// this.setState({
		// 	items: newItems
		// });
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