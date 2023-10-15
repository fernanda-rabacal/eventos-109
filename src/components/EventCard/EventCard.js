import "./EventCard.css"
import { formatDate } from "../../utils/formatDate"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { EventContext } from "../../contexts/EventContext"
import { CardEvento } from "./styles"

export function EventCard({ evento }) {
    const dataFormatada = formatDate(evento.data)

    const { deletarEvento } = useContext(EventContext)

    const navigate = useNavigate()

    function navegarParaDetalhes() {
        navigate(`/eventos/${evento.id}`/* , {
            state: evento
        } */)
    }

    const dataJaPassou = new Date(evento.data).getTime() < new Date().getTime()

    return (
        <CardEvento dataJaPassou={dataJaPassou} color="blue">
            <img src={evento.img} />

            <h2>{evento.nome}</h2>
            <span>{dataFormatada}</span>
            
            {evento.descricao && <p>{evento.descricao}</p>}

            <button onClick={() => deletarEvento(evento.id)}>Deletar</button>
            <button onClick={navegarParaDetalhes}>Ver detalhes</button>
        </CardEvento>
    )
}