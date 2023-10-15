import './EventType.css'

export function EventType({ eventType }) {

    return (
        <div className='tipo-evento'>
            <img src={eventType.img} />
            <p>{eventType.nome}</p>
        </div>
    )
}