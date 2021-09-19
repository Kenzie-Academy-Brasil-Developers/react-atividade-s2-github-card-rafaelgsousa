import "./style.css"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

function Form({lista,setLista}){

    const schema = yup.object().shape({
        repositorio:yup.string().required("É necessário preencher o campo")
    })

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const error = document.getElementById("error")

    function enviarDados(data){
        fetch(`https://api.github.com/repos/${data.repositorio}`)
        .then((response)=>response.json())
        .then((response)=>response.message!=="Not Found"?
        setLista([response,...lista])
        :
        error.innerText="Esse repositório não existe")
        .catch((err)=>console.log(err))
    }

    return(
        <>
            <form onSubmit={(handleSubmit(enviarDados))} className="Formulario">
                {console.log("errors",errors)}
                <div className="form">
                    <input placeholder="Escreva nome da organização/repositório" {...register("repositorio")} className="pesquisa"></input>
                    <button type="submit" className="botao">Pesquisar</button>
                </div>
                {<p id="error">{errors.repositorio?.message}</p>}
            </form>
        </>
    )
}
export default Form












