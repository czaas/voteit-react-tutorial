var React = require('react'),
	FeedItem = require('./FeedItem');

var FeedList = React.createClass({

	render: function(){
		var feedItems = this.props.items.map(function(item){
			return <FeedItem title={item.title} 
							description={item.description} 
							myKey={item.key}
							voteCount={item.voteCount} 
							onVote={this.props.onVote} />
		}.bind(this));

		return(
			<div className="container">
				<ul className="list-group container">
					{feedItems}
				</ul>
			</div>
		);
	}
});

module.exports = FeedList;