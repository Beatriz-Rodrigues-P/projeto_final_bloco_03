import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { atualizar, cadastrar, listar } from "../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../models/categoria/Categoria";

function FormCategoria (){

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    function retornar(){navigate("/categorias")}

    async function buscarCategoriaPorId(id: string){
        try{
            await listar(`/categorias/${id}`, setCategoria)
        }catch (error: any){
            alert("Categoria não encontrada!")
            retornar()
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id)
        }else{
            setCategoria({
                id: 0,
                nome: ""
            })
        }	
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                
                alert('Categoria atualizada com sucesso!')
            } catch (error: any) {
                    alert('Erro ao atualizar o categoria.')
            }

            
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('Categoria cadastrada com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar a categoria.')
            }
        }
        setIsLoading(false)
        retornar()
    }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar categoria':'Editar categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="tipo">Tipo de categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='tipo'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-gray-400 hover:bg-gray-800 w-1/2 py-2 mx-auto flex justify-center" type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar':'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    )
} export default FormCategoria