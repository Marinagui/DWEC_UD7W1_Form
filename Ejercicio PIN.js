window.onload = function() {
    let pinInput = document.getElementById("pin");

    pinInput.addEventListener("keyup", enviarPin);
    
    async function enviarPin() {
        let pin = pinInput.value;
        
        if(pin.length === 5) {
            // enviar el PIN a https://validate-pin.fly.dev/ en formato form-urlencoded con el método POST y mostrar si el PIN es o no correcto.
            
            const response = await fetch('https://validate-pin.fly.dev/validate', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'PIN=' + pin         
            });
           
            return content = response.status;
            alert(content);

            if (content.error) {
                console.error('error ', content.error);
              }
              console.log('json ', content);
              return content.access_token;
        }
    }


}
