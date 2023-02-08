
    let num = document.getElementById("num");
    let text = document.getElementById("text");
    const boton0 = document.getElementById("refresh0");
    const boton1 = document.getElementById("refresh1");
    
    const ejecutarApi = async () => {
        try {
            const adviceApi = await fetch ("https://api.adviceslip.com/advice");
            const data = await adviceApi.json();
            informacion = data.slip;
            
            num.innerText = informacion.id;
            text.innerText = informacion.advice;
            
            
    } catch {
        console.log(err);
    }
}


boton0.addEventListener("click", ejecutarApi);
boton1.addEventListener("click", ejecutarApi);
