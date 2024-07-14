// This is a HOC, this will render different message components based on type of message and sender of message

import UserMessage from './UserMessage'
import BotMessage from './BotMessage';

function MessageWrapper(message) {

  const renderComponent = ()=>{
    switch(message.sender){
      case 'BOT': 
        return <BotMessage {...message}/>
      case 'USER':
        return <UserMessage {...message}/>
      default: 
        return <UserMessage {...message}/>;  
    }
  }

  return (
    <div>
      {renderComponent()}
    </div>
  )
}

export default MessageWrapper