import React from "react";
import './style.css'

function Claim() {
    return (
        <>
            <div className="claim-board">
                <text className="claim-div">0.324BTC</text>
                <text className="claim-text">Unclaim Rewards</text>
                <text className="claim-div">0.324BTC</text>
                <text className="claim-text">Claim Rewards</text>
                <button className="claim-btn">Claim</button>
            </div>
        </>
    );
  }
  
export default Claim;