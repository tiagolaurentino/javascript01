function transformDegree(degree){
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
     
    //fluxo de erro
    if(!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

  //  //fluxo ideal, f -> c
    let updateDegree = Number(degree.toUpperCase().replace('F',''));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C' 
    // fluco alternativo
    if(celciusExists) {
        updateDegree = Number(degree.toUpperCase().replace('C',''));
        formula = celcius => celcius * 9/5 + 32
        degreeSign = 'F'
     }

    return formula(updateDegree) + degreeSign
}

try {
   console.log(transformDegree('15C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))
}catch(error){
    console.log(error.message)
}
