import React from "react";

function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return <h2>경고!!!비상사태!비상사태!불러 박자박사~!</h2>
}
export default WarningBanner;