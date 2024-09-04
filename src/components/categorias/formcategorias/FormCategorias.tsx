import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, cadastrar, listar } from '../../../service/service';

function FormCategoria() {
    const [categoria, setCategorias] = useState<Categoria>({} as Categoria);
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await listar(`/categorias/${id}`, setCategorias);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categoria,
            [e.target.name]: e.target.value
        });
        console.log(JSON.stringify(categoria));
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategorias);
                alert('Categoria atualizada com sucesso');
                retornar();
            } catch (error: any) {
                alert('Erro ao atualizar a Categoria');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategorias);
                alert('Categoria cadastrada com sucesso');
            } catch (error: any) {
                alert('Erro ao cadastrar a Categoria');
            }
        }

        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-orange-700">
                {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-orange-600">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="nome"
                        name="nome"
                        className="border-2 border-orange-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-white bg-orange-500 hover:bg-orange-600 w-1/2 py-2 mx-auto block transition duration-200"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
