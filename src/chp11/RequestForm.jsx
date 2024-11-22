import React, {useState} from "react";

function RequestForm(props){
    const [details, setdetails] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`상세 입력사항: ${details}`);
    }
    const handleChange = (event) => {
        setdetails(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <textarea value={details} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    );

}
export default RequestForm;