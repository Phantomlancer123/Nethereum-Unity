import React from "react";
import '../style.css'

function Staking() {
    return (
        <div className="middle">
            <div className="staking-board">
                <div className="staking-editbox">
                    <div>ssdf</div>
                    <div>
                        <input className="staking-input" />
                        <button className="staking-buttonf">Max</button>
                    </div>
                    <button className="staking-buttons">Stake</button>
                </div>
                <div className="staking-editbox">
                    <div>ssdf</div>
                    <div>
                        <input className="staking-input" />
                        <button className="staking-buttonf">Max</button>
                    </div>
                    <button className="staking-buttons">Unstake</button>
                </div>
            </div>
        </div>
    );
  }
  
export default Staking;