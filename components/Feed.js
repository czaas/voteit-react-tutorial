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
			var sorted = [];

			snapshot.forEach(function(itemSnapshot){
				var item = itemSnapshot.val();
				item.key = itemSnapshot.key();

				items.push(item);
			});

			sorted = _.sortBy(items, function(item){
				return -item.voteCount;
			});

			this.setState({
				items: sorted
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
		this.setState({
			formDisplayed: false
		});
	},

	onVote: function(item){
		var ref = new Firebase('https://burning-heat-7998.firebaseio.com/feed').child(item.key);
		ref.update(item);
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