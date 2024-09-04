export const Home = () => {

    return (
        <>
            <div className="bg-gray-100 min-h-screen p-4">
                <div className="container mx-auto">
                    {/* Título da Página */}
                    <h1 className="text-3xl font-bold text-center mb-8">Produtos</h1>

                    {/* Container dos Cartões */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white border rounded-lg shadow-md p-4">
                            <img src="/path/to/product1.jpg" alt="Produto 2" className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h2 className="text-xl font-semibold mb-2">Produto 1</h2>
                            <p className="text-gray-700 mb-2">Descrição breve do produto.</p>
                            <span className="text-lg font-bold text-orange-600">$19.99</span>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">Editar</button>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">Deletar</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border rounded-lg shadow-md p-4">
                            <img src="/path/to/product2.jpg" alt="Produto 2" className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h2 className="text-xl font-semibold mb-2">Produto 2</h2>
                            <p className="text-gray-700 mb-2">Descrição breve do produto.</p>
                            <span className="text-lg font-bold text-orange-600">$29.99</span>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">Editar</button>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">Deletar</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border rounded-lg shadow-md p-4">
                            <img src="/path/to/product3.jpg" alt="Produto 3" className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h2 className="text-xl font-semibold mb-2">Produto 3</h2>
                            <p className="text-gray-700 mb-2">Descrição breve do produto.</p>
                            <span className="text-lg font-bold text-orange-600">$39.99</span>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">Editar</button>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">Deletar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
