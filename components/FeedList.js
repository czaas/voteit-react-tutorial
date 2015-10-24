var React = require('react'),
	FeedItem = require('./FeedItem');

var FeedList = React.createClass({

	render: function(){
		var FeedItems = this.props.items.map(function(item){
			return <FeedItem title={item.title} description={item.description} voteCount={item.voteCount} />
		});

		return(
			<ul className="list-group container">
				{FeedItems}
			</ul>
		);
	}
});

module.exports = FeedList;