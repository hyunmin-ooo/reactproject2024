import React from "react";
import './AttendanceCard.css'
import img1 from './imgs/1.jpg'
const students = [
    {id:1, name:"오현민", grade:2, major: "인공지능소프트웨어",avatar: img1},
    {id:2, name:"박현경", grade:3, major: "전기" ,avatar: "https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"임희정", grade:3, major: "그린에너지" ,avatar: "https://randomuser.me/api/portraits/men/3.jpg"},
    {id:4, name:"유현주", grade:4, major: "시각디자인" ,avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id:5, name:"마다솜", grade:1, major: "인공지능소프트웨어" ,avatar: "https://randomuser.me/api/portraits/men/5.jpg"},
    {id:6, name:"김철주", grade:3, major: "블록체인학과" ,avatar: "https://randomuser.me/api/portraits/women/6.jpg"},
    {id:7, name:"상만덕", grade:2, major: "체육학" ,avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
    {id:8, name:"오마적", grade:4, major: "국문학" ,avatar: "https://randomuser.me/api/portraits/women/8.jpg"},
    {id:9, name:"묻진마", grade:4, major: "경찰행정학" ,avatar: "https://randomuser.me/api/portraits/men/8.jpg"}
]
function AttendanceCard(){
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((student)=>(
                        <div className="student-card">
                            <img src={student.avatar} alt={student.name} className="student-avatar"/>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AttendanceCard;