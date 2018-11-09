import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import SendMessage from './SendMessage'

class Chat extends Component {
  static propTypes = {
     user: PropTypes.object.isRequired,
 	 messages: PropTypes.array.isRequired,
 	 onMessage: PropTypes.func.isRequired
  }
  sendMessage = (message) => {
    const {onMessage, user} = this.props
    onMessage(user.username, message)
  }

  render(){
    const {user, messages} = this.props
    return(
      <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>
            <Message
                user={user}
                messages={messages}
            />
            <SendMessage onMessage={this.sendMessage}/>
      </div>
    )
	}
}


export default Chat