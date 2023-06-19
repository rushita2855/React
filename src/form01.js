import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", pass: "" })
    const [information, setInformation] = useState(JSON.parse(localStorage.getItem("Information")) || []);
    const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem("loginData")) || []);
    const Change = (e) => {
        console.log(e.target);
        let { name, value } = e.target;
        setData({ ...data, [name]: value, id: Date.now });
    }

    const handleSubmit = () => {

        setInformation([...information, data]);
        const studentEmail = information.find((item) => item.email === data.email);
        console.log(studentEmail);
        const studentPass = information.find((item) => item?.pass === data?.pass);
        console.log(studentPass);

        if (studentEmail && studentPass) {

            window.alert('login')
            setLoginData([...loginData, data])
            localStorage.setItem("loginData", JSON.stringify([...loginData, data]));
            navigate('/')
        } else {
            window.alert('Back to Sign Up form.....!')
            navigate('/Login')
        }
    }
    console.log(data);
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email : </label>
                <input id="email" type="email" name="email" onClick={(e) => Change(e)} /><br /><br />
                <label htmlFor="password">Password : </label>
                <input id="password" type="password" name="pass" onClick={(e) => Change(e)} /><br /><br />
                <button type="primary" htmlType="submit" onClick={() => handleSubmit()}>submit</button>
            </form>
        </div>
    )
}
export default Login                                        