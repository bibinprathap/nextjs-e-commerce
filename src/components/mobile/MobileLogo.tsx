// react
import React from 'react';

function MobileLogo() {
    return (
        <div className="mobile-logo">
            {/* mobile-logo */}
            <svg width="130" >

                <text x="1" y="70" style={{
                    whiteSpace: "pre",
                    fontWeight: 800,
                }} fill="#404040" font-size="14">
                    ROYAL AUTO
                             </text>
                <text x="1" y="90" style={{
                    whiteSpace: "pre",
                    fontWeight: 800,
                }} fill="#404040" font-size="14">
                    PARTS   </text>
                <text x="50" y="90" style={{
                    whiteSpace: "pre",
                    fontWeight: 800,
                }} fill="#e52727" font-size="14">
                    MARKET </text>


            </svg>
            {/* mobile-logo / end */}
        </div>
    );
}

export default MobileLogo;
