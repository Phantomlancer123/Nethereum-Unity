import React from "react";
import '../style.css'

function Staking() {
    return (
        <>
            <div className="staking-board">
                <div className="staking-editbox">
                    <text>ssdf</text>
                    <div>
                        <input className="staking-input" />
                        <button className="staking-button1">Max</button>
                    </div>
                    <button className="staking-button2">Stake</button>
                </div>
                <div className="staking-editbox">
                    <text>ssdf</text>
                    <div>
                        <input className="staking-input" />
                        <button className="staking-button1">Max</button>
                    </div>
                    <button className="staking-button2">Unstake</button>
                </div>
            </div>
        </>
    );
  }
  
export default Staking;