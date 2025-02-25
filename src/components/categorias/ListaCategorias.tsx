import { useEffect, useState } from "react"
import { listar } from "../../services/Service"
import { ColorRing } from "react-loader-spinner"
import Categoria from "../../models/categoria/Categoria"
import CardCategoria from "./CardCategoria"

function ListarCategorias(){

    const [categorias, setCategorias]=useState<Categoria[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarCategorias() {
        setIsLoading(true)

        try{
            await listar('/categorias', setCategorias)
        }catch(error: any){
            console.log("Erro ao listar categorias!")
        }finally{
            setIsLoading(false)
        }
		
	}

	useEffect(() => {
		buscarCategorias()
	}, [categorias.length])

    return(
        <>
            {categorias.length===0 && (
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria)=>(
                            <CardCategoria key={categoria.id} categoria={categoria}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
} export default ListarCategorias