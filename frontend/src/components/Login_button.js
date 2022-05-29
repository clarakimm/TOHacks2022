import React from "react";

const Login_button = () => {
    function sayHello() {
        alert('You clicked me!');
      }
    return(
        <div style={{display: 'flex', justifyContent: 'center' }}>
          <button variant='contained'
                style={{
                float: 'center',
                textAlign: 'center',
                color: '#000000',
                fontFamily: 'Kumbh Sans',
                fontWeight: 'normal',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                alignContent: 'center',
            }}onClick={sayHello}>Login</button>  
        </div>
    )
};

export default Login_button;