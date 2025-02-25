function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-gray-800 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia

                    <div className='flex gap-4'>
                        Categorias
                        Cadastrar categorias
                        <img src="src/assets/user.svg" alt="user" className="bg-white rounded" />
                        <img src="src/assets/shopping-cart.svg" alt="user" className="bg-white rounded" />
                        <img src="src/assets/sign-out.svg" alt="user" className="bg-white rounded" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar