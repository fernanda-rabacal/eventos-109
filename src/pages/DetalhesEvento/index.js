import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EventContext } from "../../contexts/EventContext"

export function DetalhesEvento() {
    /* const { state } = useLocation() */
    const { id } = useParams() 
    const navigate = useNavigate()

    const [img, setImg] = useState("")
    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [descricao, setDescricao] = useState("")

    const { eventos, editarEvento } = useContext(EventContext)

    const evento = eventos.find(evento => evento.id === Number(id))

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
        }
      }

    function handleEditarEvento(eventoDeSubmit) {
        eventoDeSubmit.preventDefault()

        editarEvento({ nome, data, descricao, img, id})
    }

    useEffect(() => {
        if(!evento) {
            navigate('/nao-encontrado')
        }
    }, [])

    if(!evento) {
        return <></>
    }

    return (
        <>
            <h1>{evento.nome}</h1>
            <img src={evento.img} style={{ width: "300px"}} />
            <p>{evento.descricao}</p>
            <p>{evento.data}</p>

            <form onSubmit={handleEditarEvento}>
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

                <button>Atualizar</button>
            </form>
        </>
    )
}