import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SendMessage extends Component {
  static propTypes = {
    onMessage: PropTypes.func.isRequired
  }
  state = {
    message: ''
  }

  handleInput = (value) => {
    this.setState(() =>({
      message: value
    }))
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {onMessage} = this.props
    const {message} = this.state 	
    onMessage(message) 
    this.clearState()    
  };

  isDisabled  = () => {
   	const {message} = this.state
    return message === ''
   
  }
  clearState = () => {
    this.setState({
      message: ''
    })
  }
  render() {
    const {message} = this.state
    return(
    <div>
    	<form onSubmit={this.handleSubmit} className="input-group">
    		<input type="text" value={message} 
				onChange={(event) => this.handleInput(event.target.value)}
				className="form-control" placeholder="Enter your message..." 
			/>
    		<div className="input-group-append">
    			<button className="btn submit-button" disabled={this.isDisabled()}>
					SEND
				</button>
			</div>
		</form>
	</div>)
  }
}



export default SendMessage

