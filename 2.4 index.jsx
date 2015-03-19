

    var MessageBox = React.createClass({
		
		getInitialState: function () {
			return {
				isVisible : true,
				titleMessage: 'Hello, World'
			}
		},

		render: function() {
			var inlineStyles = {
				display: this.state.isVisible ? 'block' : 'none'
			};// object literal

			var subMessage = 'It\'s not good to see you';
			
    		return (
      			<div className="container jumbotron" style={inlineStyles}>
      				<h2>{this.props.titleMessage}</h2>
      				<SubMessage message={subMessage}/>
      			</div>
    		);
 		}
	});

	 var SubMessage = React.createClass({
	 	getDefaultProps: function () {
	 		return {
	 			message: 'It\'s good to see you'
	 		}
	 	}, 

		render: function() {
    		return (
      			<div>
      				{this.props.message}
      			</div>
    		);
 		}
	});

	 var message = 'Yo!';

	var reactComponent = React.render(
  		<MessageBox titleMessage={message}/>,
  		document.getElementById('app')
	);

	