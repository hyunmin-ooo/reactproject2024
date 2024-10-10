import React from "react";

function ClickButton() {
    function handleClick(){
        alert("버튼을 클릭하였습니다.");
    }
    //alert()는 알림 띄우는 용가리..
    return(
        <button onClick={handleClick}>
            클릭해보세요
        </button>
    );
}
export default ClickButton