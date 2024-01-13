import React, { useState } from "react";
import "./SubscribeBoard.css";

export default function SubscribeBoard(){
    const [valueInputEmail, setValueInputEmail] = useState('')
    const [errorInput, setErrorInput] = useState(false);
    const [errorText, setErrorText] = useState("");

    function examinationInput() {
        console.log(valueInputEmail)
        if (valueInputEmail === ''){
            setErrorInput(true);
            setErrorText(" You didn't enter anything!");
        } else if (valueInputEmail.indexOf("@") === -1){
            setErrorInput(true);
            setErrorText(" Your email does not contain '@'!");
        } else if (valueInputEmail.indexOf("@") === 0){
            setErrorInput(true);
            setErrorText(" '@' - cannot be in first place!");
        } else if (valueInputEmail.indexOf("@") === (valueInputEmail.length-1)){
            setErrorInput(true);
            setErrorText(" '@' - cannot be in last place!");
        }
    }

    return(
        <>
            <div className="SubscribeBoard">
                <div className="ContainerForAbsolute">
                    <img className="paperAirplane" src="../../img/Group 77.png" alt="paperAirplane" />
                </div>
                <div className="SubscribeBoardGreen">
                    <p className="textWithSubscribe cursorDefault">
                        Subscribe to get information, latest news and other
                        interesting offers about Cobham
                    </p>
                    <div className="containerForButtonAndInput">
                        <div className="EmailContainer">
                            <div className="MailForInput">
                                <img src="../../img/Group 46.png" alt="mail" />
                            </div>
                            <input className="inputEmail" type="email" placeholder="Your email" onChange={(event)=>{setValueInputEmail(event.target.value)}}/>
                        </div>
                        <div className="buttonSubscribe" onClick={examinationInput}>
                            <p className="textOnButtonSubscribe">
                                Subscribe
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ContainerForAbsolute">
                    <img className="pluses" src="../../img/Group 5.png" alt="pluses" />
                </div>
                {
                    errorInput && (
                        <div className="containerErrorWindow">
                            <div className="errorWindow">
                                <p>
                                    Error: { errorText }
                                </p>
                                <div onClick={() => setErrorInput(false)}>
                                    <p>
                                        OK
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};
