import React, { useState, useEffect } from "react";
import '../style.css'

function Landing(props) {
    
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://blockchain.info/ticker")
        .then((res) => res.json())
        .then((data) => {        
            setPrice(data.USD.last);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <div className="first-top">
                <div className="first-box">
                    <text>Your Balance</text>
                    <text>{props.data.Balance} $SATS</text>
                </div>
                <div className="first-box">
                    <text>$SAT Price</text>
                    <text>{loading ? "LOADING" : "$" + price}</text>
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