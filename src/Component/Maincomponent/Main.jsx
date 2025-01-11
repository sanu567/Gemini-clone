import React, { useContext } from 'react'
import "./Main.css"
import { Context } from '../../Context/Context'

const Main = () => {
    const {onset,recentpro,showresult,loadinng,resultdata,setInput,input}= useContext(Context)
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src="https://th.bing.com/th/id/OIP.UYagQDMo7CCbBLXOPB5etAHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="user" />
            </div>
            <div className="main-container">
                {!showresult?<>
                    <div className="greet">
                    <p><span>Hello,sanu</span></p>
                    <p>how can I help you?s</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beatiful place to see on an upcoming road trip</p>
                        <img src="https://th.bing.com/th/id/OIP.jkM4g57BxcmEEKXODdStqAHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summerize this concept</p>
                        <img src="https://th.bing.com/th?id=OIP.MTVVOrxBoy642m-2ly-ijAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activites for our work</p>
                        <img src="http://ts1.mm.bing.net/th?id=OIP.Thm2v7WpQ_FlDQQJZFbkrAHaHa&pid=15.1" alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src="https://th.bing.com/th/id/OIP.QARblItaMO7gCMB7Y7-JlAHaF5?rs=1&pid=ImgDetMain" alt="" />
                    </div>
                </div>
                </>
                : <div className='result'>
                    <div className="result-title">
                        <img src="https://th.bing.com/th/id/OIP.UYagQDMo7CCbBLXOPB5etAHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="user" />
                        <p>{recentpro}</p>
                    </div>
                    <div className="result-data">
                        <img src="https://th.bing.com/th?q=Gemini+Ai+Logo+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" width={"70px"} />
                        {loadinng? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>:
                        <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
                        }
                       
                    </div>
                </div>
                }


              
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt ' />
                        <div>
                    <img src="https://th.bing.com/th/id/OIP.BDEXTscsAlufJaeJmItttwHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="gallery" />
                    <img src="http://ts4.mm.bing.net/th?id=OIP.GHRl3_Nt8aguci_ztL0v7gHaHa&pid=15.1" alt="mic" />
                    <img onClick={()=>onset()} src="https://th.bing.com/th/id/OIP.cd2ar7nv33chGF1ZfLHzfAAAAA?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="send" />
                    </div>
                    </div>
                    <p className='bottom-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea temporibus nobis laboriosam quam minus placeat ducimus doloremque excepturi. Magnam quos voluptatibus nisi incidunt  ullam.</p>
                </div>
              
            </div>
        </div>
    )
}

export default Main
