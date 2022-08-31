function converter(){
    
    let valor1= window.document.getElementById('temp1')
    var num= Number(valor1.value)
    let escala1= window.document.getElementById('lista')
    let escala2= window.document.getElementById('lista2')
    let value1= escala1.value
    let value2= escala2.value
    
    if((value1= "celsius") && (value2= "celsius")){
        resp.innerHTML= `O valor equivale a ${num}° celsius`
    }  
    if((value1= "celsius") && (value2="fahrenheit")){
        let resposta= (num/5*9)+32
        resp.innerHTML= `O valor de ${num}°C em ${value2} é ${resposta}° `
    }
    if((value1= "celsius") && (value2="kelvin")){
        let resposta= num+273
        resp.innerHTML= `O valor de ${num}°C em ${value2} é ${resposta}`
    }


    
    
    //resp.innerHTML= `${num}`
    //resp.innerHTML+= `${value1} </br> ${value2}`
}
