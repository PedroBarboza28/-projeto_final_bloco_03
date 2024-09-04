export const Navbar = () => {
    return (
        <>
            <div className="bg-orange-400 text-white flex items-center justify-between p-4 font-bold">
                <h2 className="text-xl ml-8">Farmacia</h2>
                <div className="flex space-x-4 mr-8">
                    <a href="#" className="no-underline hover:no-underline hover:text-slate-950">Categorias</a>
                    <a href="#" className="no-underline hover:no-underline  hover:text-slate-950">Cadastrar</a>
                    <a href="#" className="no-underline hover:no-underline  hover:text-slate-950">Editar</a>
                    <a href="#" className="no-underline hover:no-underline  hover:text-slate-950">Deletar</a>
                </div>
            </div>
        </>
    )
}
