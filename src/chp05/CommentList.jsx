import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name:"오현민",
        comment:"추석연휴 잘 보내고 오세오.",
    },
    {
        name:"김민지",
        comment:"집에 언제 가나~ 차막혀서",
    },
    {
        name:"정구영",
        comment:"프로젝트 예습용, 실습용을 나눌게요.",
    },
];


function CommentList(props){
    return(
        <div>
            {
                comments.map((comment) =>{
                    return(
                        <Comment name={comment.name} comment={comment.comment}/>);
                })
            }
        </div>
    );
}

export default CommentList;