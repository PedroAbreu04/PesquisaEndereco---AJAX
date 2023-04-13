function getDadosEnderecoPorCEP(cep){
    let URL = 'https://viacep.com.br/ws/' + cep +'/json/'

    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', URL)
    xmlHttp.onreadystatechange = () =>{
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
           let dadosJSONText = xmlHttp.responseText
           let dadosJSONObj = JSON.parse(dadosJSONText)

           console.log(dadosJSONObj)

          document.getElementById('endereco').value = dadosJSONObj.logradouro
          document.getElementById('bairro').value = dadosJSONObj.bairro
          document.getElementById('cidade').value = dadosJSONObj.localidade
          document.getElementById('uf').value = dadosJSONObj.uf 
        }
    }
    xmlHttp.send()
}