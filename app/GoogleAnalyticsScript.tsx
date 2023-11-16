import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script id="ga">{`console.log("GA")`}</Script>
        </>
    );
};

export default GoogleAnalyticsScript;
