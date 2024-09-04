import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { cadastrar, listar } from "../../../service/service";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListarCategorias() {


    const [categorias, setCategorias] = useState<Categoria[]>([])


    async function BuscarCategorias() {

        try {
            await listar(`/categorias`, setCategorias)
        } catch (error: any) {

            alert("Erro ao Cadastrar Categoria")

        }
    }

        useEffect(() => {
            BuscarCategorias()
        }, [categorias.length])

        return (
            <>

                {
                    cadastrar.length === 0 && (
                        <Dna
                            visible={true}
                            height="200"
                            width="200"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper mx-auto"
                        />
                    )
                }

                < div className="flex justify-center w-full my-4" >
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">


                            {categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    </div>
                </div >
            </>
        )
    }

export default ListarCategorias;