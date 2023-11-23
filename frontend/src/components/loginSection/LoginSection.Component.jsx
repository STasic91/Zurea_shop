import { useState } from "react";
const LoginSectionComponent = () => {
    const[singInObj,setSingObj] = useState({
        email:"",
        password:""
    })
    const handleSingInObj = (e)=>{
        console.log(e)
    }
    return (
        <>
            <h1 className="page-title">Log in is to your account </h1>
            <div className="form-wrapper"> 
                <div className="login-form">
                <div className="form-floating mb-3">
                    <label for="floatingInput">Email adress</label>
                    <input type="email" 
                    class="form-control"
                     id="floatingInput"
                     onChange={(e)=>handleSingInObj(e)}
                      placeholder="Name"/>
                </div>
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input type="password"
                     class="form-control"
                      id="floatingPassword"
                       placeholder="Password"/>
                </div>
                </div>
            </div>
        </>
        
    )
}

export default LoginSectionComponent;