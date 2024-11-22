import React, {useState} from "react";

function NameRequestForm(props){
    const [name, setname] = useState('');
    const [details, setdetails] = useState('');
    const [fruit, setfruit] = useState('');
    const [file, setfile] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        입력한 이름: ${name}
        상세한 내용: ${details}
        선택한 과일: ${fruit}
        선택한 파일: ${file}
        `);
    }
    const handleChange = (event) => {
        const{target} = event;
        switch (target.id){
            case "name":
                setname(target.value);
                break;
            case "details":
                setdetails(target.value);
                break;
            case "fruit":
                setfruit(target.value);
                break;
            case "file":
                setfile(target.value);
                break;
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                성명:
                <input id='name' type="text" value={name} onChange={handleChange}/>
            </label><br/><br/>

            <label>
                요청사항:
                <textarea id='details' value={details} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                좋아하는 과일선택:
                <select id="fruit" value={fruit} onChange={handleChange}>
                    <option>사과</option>
                    <option>포도</option>
                    <option>바나나</option>
                    <option>수박</option>
                </select>
            </label><br/><br/>
            <label>
                파일선택:
                <input id="file" type="file" value={file} onChange={handleChange}/>
            </label><br/><br/>
            <button type="submit">제출</button>
        </form>
    );

}

export default NameRequestForm;