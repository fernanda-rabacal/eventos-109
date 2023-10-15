function converterImg(eventoDeChange) {
    const reader = new FileReader() 
    /* instancia um objeto de leitura e conversão de arquivos */

    reader.readAsDataURL(eventoDeChange.target.files[0])
    /* Capta do target do evento (quem disparou ele) a lista de arquivos
      e de dentro da lista capta o primeiro arquivo e chama a função para 
      conversão do arquivo para URL */

      /*onload é o evento disparado quando a conversão termina */
    reader.onload = () => {
      /* o resultado da conversão, no caso nossa url */
      setImg(reader.result)
      console.log(reader.result)
    }
}