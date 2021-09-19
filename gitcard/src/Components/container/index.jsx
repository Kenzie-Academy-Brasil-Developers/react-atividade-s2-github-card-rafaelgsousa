import "./style.css"
function Conteiner({lista}){
    return(
        <ul className="lista">
            {lista.map((e,i)=>{
            return <li key={i} className="repo">
                <img src={e.owner.avatar_url} alt="imagem" className="imagem"/>
                <div className="dados">
                    <p>{e.full_name}</p>
                    <p>{e.description}</p>
                </div>
            </li>})}
        </ul>
    )
}

export default Conteiner