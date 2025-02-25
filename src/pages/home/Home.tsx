function Home() {
    return (
        <>
            <div className="bg-gray-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja bem-vindo!
                        </h2>
                        <p className='text-xl'>
                        Farmácia 24 horas e com entrega a domicílio
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova categoria
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/n0nz1jfh6/home-farmacia.png?updatedAt=1740490537357"
                            alt="Imagem página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home