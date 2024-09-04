export const Footer = () => {
    return (
        <footer className="bg-orange-400 text-white py-6">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-center mb-4 text-gray-100">© 2024 Farmacia. Todos os direitos reservados.</p>
                <div className="flex space-x-6 mb-4">
                    <a href="#" className="hover:text-slate-950 transition-colors">Privacidade</a>
                    <a href="#" className="hover:text-slate-950 transition-colors">Termos de Serviço</a>
                    <a href="#" className="hover:text-slate-950 transition-colors">Sobre</a>
                </div>

            </div>
        </footer>
    )
}
