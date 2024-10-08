import React from "react";
import Button from "./Button"

function ConfirmDialog(props){
    return(
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <Button color='green'>확인</Button>
            <Button color='red'>최소</Button>
            <Button color='blue'>건너뛰기</Button>
        </div>
    )
}
export default ConfirmDialog;