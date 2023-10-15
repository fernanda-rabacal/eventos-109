import { NavLink } from "react-router-dom";

export function NaoEncontrado() {
    return (
        <>
            <h1>Oops, pagina não encontrada</h1>
            <NavLink to="/">Voltar para o inicio</NavLink>
        </>
    )
}