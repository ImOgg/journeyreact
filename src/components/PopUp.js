import React from 'react'

const PopUp = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setButtonPop(false)}>close</button>
                <h3>My Popup</h3>
                <p>This is my time triggered popup.</p>
            </div>
        </div>
    ) : "";
}


export default PopUp