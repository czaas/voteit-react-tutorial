var React = require('react');

var FeedForm = React.createClass({

	handleForm: function(e){
		e.preventDefault();

		var newItem = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			voteCount: 0
		};

		this.refs.feedForm.reset();

		this.props.onNewItem(newItem);
	},

	render: function(){

		var display = this.props.displayed ? 'block' : 'none';

		var styles = {
			display: display
		};

		return(
			<form ref="feedForm" className="container" id="feedForm" style={styles} onSubmit={this.handleForm}>
				<div className="form-group">
					<input ref="title" type="text" className="form-control" placeholder="Title" />
					<input ref="description" type="text" className="form-control" placeholder="Description" />
					<button type="submit" className="btn btn-primary btn-block">Add</button>
				</div>
			</form>
		);
	}
});

module.exports = FeedForm;