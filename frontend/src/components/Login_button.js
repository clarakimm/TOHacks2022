import React from "react";

const Login_button = () => {
    function sayHello() {
        alert('Login here');
      }
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button variant='contained'
                style={{
                float: 'center',
                textAlign: 'center',
                fontFamily: 'Kumbh Sans',
                fontWeight: 'normal',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                alignContent: 'center',
                padding: "10px 50px",
                fontSize: "1.5em",
                backgroundColor: '#F0EFE8',
                borderRadius: "10px",
                border: "solid 2px grey",
            }}onClick={sayHello}>Login</button>  
        </div>
    )
};

export default Login_button;