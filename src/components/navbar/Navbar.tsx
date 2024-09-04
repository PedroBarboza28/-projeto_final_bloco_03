import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            
            <div className="bg-orange-400 text-white flex items-center justify-between p-4 font-bold">

                <Link to="/home" className="text-xl ml-8 hover:underline">
                    Farmacia
                </Link>

                <div className="flex space-x-4 mr-8">

                    <Link to="/categorias" className="no-underline hover:text-slate-950">
                        Categorias
                    </Link>
                    <Link to="/cadastrar" className="no-underline hover:text-slate-950">
                        Cadastrar Categoria
                    </Link>
                </div>
            </div>
        </>
    )
}
