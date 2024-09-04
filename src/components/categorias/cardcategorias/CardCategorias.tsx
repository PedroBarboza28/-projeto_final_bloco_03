import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import DeletarCategoria from '../deletarcategorias/DeletarCategorias';

interface CardCategoriasProps {
    categoria: Categoria;
}


function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border border-gray-300 flex flex-col rounded-lg overflow-hidden shadow-md'>
            <header className='py-2 px-6 bg-orange-400 text-white font-bold text-2xl'>
                {categoria.nome}
            </header>

            <div className="flex space-x-2 border-t border-gray-300 bg-gray-50 p-2">

                <Link to={`/editarcategoria/${categoria.id}`} className='flex-grow'>
                    <button className='w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors'>
                        Editar
                    </button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='flex-grow'>
                    <button className='w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors' onClick={DeletarCategoria}>
                        Excluir
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;
