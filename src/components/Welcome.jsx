import React,{useEffect} from 'react'
import Robot from "../assets/robot.gif"
const Welcome = ({ setWelcomeVisible}) => {

  /*The basic idea is to show a welcome screen on opening the Chat page
  When the user clicks on the screen the chat screen appears
  */ 

  //Click on the welcome screen to get the chat section
  const hideDiv = () => {
    setWelcomeVisible(false);
  };

  //On page refresh the Welcome screen will reappear
  useEffect(() => {
    setWelcomeVisible(true)
  },[]) 

  return (
     <div className='welcome-container' onClick={hideDiv}>
        <div className="welcome">
      <img src={Robot} alt="robot" className='robot-image' />
      <h1>
        Welcome!
      </h1>
      <h2>Your thoughts will be safe with us 🤭</h2>
      <h3>Send a message to your secret friend ⏩</h3>
    </div>
    </div>
    
  )
}

export default Welcome
