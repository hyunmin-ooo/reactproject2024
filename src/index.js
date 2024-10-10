import React from 'react';
import ReactDOM from 'react-dom/client';
// import './chp04/Clock.css';
import reportWebVitals from './reportWebVitals';
// import ConfirmDialog from "./chp04/ConfirmDialog";
// import Clock from "./chp04/Clock";
// import CommentList from "./chp05/CommentList";
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate";
import Toggle from "./chp08/Toggle";
import MyButton from "./chp08/MyButton";
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";
import Counter from "./chp08/Counter";
import InputTest from "./chp08/InputTest";
import ConfirmButton2 from "./chp08/ConfirmButton2";
import ConfirmButton3 from "./ConfirmButton3";
import ConfirmButton from "./chp08/ConfirmButton";
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() =>{
    root.render(
        <React.StrictMode>
            <ConfirmButton2/>
        </React.StrictMode>
    );
},1000
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
