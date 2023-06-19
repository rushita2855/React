import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", pass: "" })
    const [search, setSearch] = useState(JSON.parse(localStorage.getItem("Information")) || []);

    function Info(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    function Change(e) {
        setSearch([...search, data]);
        localStorage.setItem("Information", JSON.stringify([...search, data]));
    }

    return (
        <div>
            <h1>Sing Up</h1>
            <form>
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" onChange={Info} onClick={Change} /><br /><br />
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" name="pass" onChange={Info} onClick={Change} /><br /><br />
                <button type="button" htmlType="submit" onClick={() => navigate("/login")} >Submit</button><br /><br />
            </form>
        </div>
    )
}
export default Signup
