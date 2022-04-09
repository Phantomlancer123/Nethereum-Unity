import React from "react";
import '../style.css'

function Landing(props) {
    return (
        <>
            <div className="first-top">
                <div className="first-box">
                    <text>Your Balance</text>
                    <text>{props.data.Balance} $SATS</text>
                </div>
                <div className="first-box">
                    <text>$SAT Price</text>
                    <text>$ 000009467</text>
                </div>
            </div>
            <div className="first-top">
                <div className="first-box">
                    <text>Treasury Balance</text>
                    <text>$ 7986838</text>
                </div>
                <div className="first-box">
                    <text>Based Tokens</text>
                    <text>8986 $SATS</text>
                </div>
            </div>
        </>
    );
  }
  
export default Landing;