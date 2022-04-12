import React from "react";
import '../style.css'

function Claim() {
    return (
        <div className="middle">
            <div className="claim-board">
                <div className="claim-div">0.324 WBTC</div>
                <div className="claim-text">Unclaim Rewards</div>
                <div className="claim-div">0.324 WBTC</div>
                <div className="claim-text">Claim Rewards</div>
                <button className="claim-btn">Claim</button>
            </div>
        </div>
    );
 }
  
export default Claim;