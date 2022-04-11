import React, { useState, useEffect } from "react";
import '../style.css'

function Landing(props) {
    
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((waletData) => {        
            setPrice(waletData.USD.last);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <div className="landing-top">
                <div className="landing-box">
                    <div>Your Balance</div>
                    <div>{props.waletData.balance} $SATS</div>
                    {/* <div> $SATS</div> */}

                </div>
                <div className="landing-box">
                    <div>$SAT Price</div>
                    <div>{loading ? "LOADING" : "$" + price}</div>
                </div>
            </div>
            <div className="landing-top">
                <div className="landing-box">
                    <div>Treasury Balance</div>
                    <div>$ 7986838</div>
                </div>
                <div className="landing-box">
                    <div>Burned Tokens</div>
                    <div>8986 $SATS</div>
                </div>
            </div>
        </>
    );
  }
  
export default Landing;