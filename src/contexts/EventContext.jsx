import { createContext, useEffect, useState } from "react";
import { events } from "../data/events";

export const EventContext = createContext({})

export function EventContextProvider({ children }) {
    const estadoDoNavegador = JSON.parse(localStorage.getItem("eventos:1.1"))

    const [eventos, setEventos] = useState(estadoDoNavegador ?? events)
      // ?? coalescencia nula

    function cadastrarNovoEvento(evento) {
        const id = eventos.length > 0 ? eventos[eventos.length - 1].id + 1 : 1
    
        const novoEvento = {
          id,
          nome: evento.nome, 
          data: evento.data,
          img: evento.img,
          descricao: evento.descricao
        }
    
        setEventos([...eventos, novoEvento])
      }

    function editarEvento(dadosEvento) {
        const eventosAtualizados = eventos.map(evento => {
            if(evento.id === Number(dadosEvento.id)) {
                return {
                    id: evento.id,
                    nome: dadosEvento.nome ? dadosEvento.nome : evento.nome, 
                    data: dadosEvento.data ? dadosEvento.data : evento.data,
                    img: dadosEvento.img ? dadosEvento.img : evento.img,
                    descricao: dadosEvento.descricao ? dadosEvento.descricao : evento.descricao
                  }
            }

            return evento
        })
    
        setEventos(eventosAtualizados)
      }

      function deletarEvento(id) {
        const confirmar = window.confirm("Tem certeza de que quer apagar o evento?")
    
        if(!confirmar) {
          return;
        }
    
        const eventosFiltrados = eventos.filter(evento => evento.id !== id)
    
        setEventos(eventosFiltrados)
      }
    
      useEffect(() => {
        localStorage.setItem("eventos:1.1", JSON.stringify(eventos))
      }, [eventos])

    return (
        <EventContext.Provider value={{
            eventos, 
            cadastrarNovoEvento,
            deletarEvento,
            editarEvento
        }}>
            {children}
        </EventContext.Provider>
    )
}