import './styles.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { EventCard } from '../../components/EventCard/EventCard';

import { eventsTypes } from '../../data/eventsTypes'; 
import { EventType } from '../../components/EventType/EventType';
import { useContext, useState } from 'react';
import { EventContext } from '../../contexts/EventContext';

export function Home() {
  const { cadastrarNovoEvento, eventos } = useContext(EventContext)

  const [img, setImg] = useState("")
  const [nome, setNome] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")


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

  function handleCadastrarEvento(eventoDeSubmit) {
    eventoDeSubmit.preventDefault()

    cadastrarNovoEvento({ nome, data, descricao, img })

    /* limpar o formulário */
    eventoDeSubmit.target.reset()
  }

  return (
    <> 
      <Header />

      <div className='tipos-eventos'>
        {
          eventsTypes.map(type => {
            return <EventType key={type.nome} eventType={type} />
          })
        }
      </div>

      <div className="App">
        <form onSubmit={handleCadastrarEvento}>
          <div>
            <label htmlFor='nome'>Nome</label>
            <input onChange={(e) => setNome(e.target.value)} type='text' id='nome' />
          </div>
          <div>
            <label htmlFor='data'>Data</label>
            <input onChange={(e) => setData(e.target.value)} type='datetime-local' id='data' />
          </div>

          <div>
            <label htmlFor='descricao'>Descrição</label>
            <input onChange={(e) => setDescricao(e.target.value)} type='text' id='descricao' />
          </div>

          <div className='label-img'>
            <label htmlFor='img'>Selecione uma imagem</label>
            <input onChange={converterImg} type='file' id='img' />
          </div>

          <button>Cadastrar</button>
        </form>

        <div className='container-eventos'>
          {eventos.map((evento) => {
            return (
              <EventCard 
                key={evento.id}
                evento={evento}
              /*   deletarEvento={deletarEvento} */
                /* img={evento.img}
                nome={evento.nome}
                data={evento.data} */
              />
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
