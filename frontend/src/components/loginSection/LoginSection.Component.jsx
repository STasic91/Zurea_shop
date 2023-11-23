
const LoginSectionComponent = () => {
    return (
        <>
            <h1 className="page-title">Log in is to your account </h1>
            <div> 
                <div class="form-floating mb-3">
                    <label for="floatingInput">Email adress</label>
                    <input type="email" class="form-control" id="floatingInput" placeholder="Name"/>
                </div>
                <div class="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>

                </div>
            </div>
        </>
        
    )
}

export default LoginSectionComponent;