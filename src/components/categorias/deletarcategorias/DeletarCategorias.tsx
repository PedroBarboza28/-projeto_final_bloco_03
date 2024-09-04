import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Categoria from '../../../models/Categoria'
import { useNavigate } from 'react-router-dom'
import { deletar, listar } from '../../../service/service'

function DeletarCategoria() {

    const [categoria, setCategorias] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>()


    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategorias)

        } catch (error: any) {

            alert("Não existe Categoria")
        }
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {

        navigate("/categorias")

    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a Categoria')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-orange-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-orange-50 h-full'>{categoria.nome}</p>
                <div className="flex">
                    <button className=' text-white bg-orange-500 hover:bg-orange-700 w-full py-2'>
                        Não
                    </button>
                    <button className='w-full text-white bg-red-500 hover:bg-red-700 flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>

        </div>
        
    )
}

export default DeletarCategoria;
