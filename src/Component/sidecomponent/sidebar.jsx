import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { Context } from '../../Context/Context';
const Sidebar = () => {
  const[extended, setExtended] = useState(false);
  const{onset,previous,setPrevious,setRecentpro,newChat}= useContext(Context);

  const loadprom = async(prompt)=>{
    setRecentpro(prompt)
    await onset(prompt)
  }
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menus' src="https://th.bing.com/th/id/OIP.waFgmNTF1-qFNfxrYp7vBAHaHa?w=196&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="menu"  />
        <div onClick={()=>newChat()} className="new-chat">
            <img src='https://th.bing.com/th/id/OIP.npfwjjV1CqXDZdjgwr8MbgHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='add'/>
            {extended?<p>New chat</p>:null}
        </div>
        {extended?
        <div className="recent">
            <p className='recent-title'>
                Recent
            </p>
            {previous.map((item,i)=>{
              return(
                <div onClick={()=>loadprom(item)} className="recent-entry">
                <img src="http://ts1.mm.bing.net/th?id=OIP.Thm2v7WpQ_FlDQQJZFbkrAHaHa&pid=15.1" alt="message" />
                <p>{item.slice(0,18)}...</p>
            </div>
              )
              
            })}
           
        </div>
        :null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src="https://th.bing.com/th/id/OIP.JBHaX0dMx5JeSNFG6SJXqwHaHa?w=220&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="icon"/>
           {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="https://th.bing.com/th/id/OIP.Z8I6mZdilKkZc-1Y8Rr_iAHaHw?w=197&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="icon" />
           {extended? <p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src="https://th.bing.com/th?q=Copyright+Free+Settings+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="icon"  />
           {extended? <p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
 