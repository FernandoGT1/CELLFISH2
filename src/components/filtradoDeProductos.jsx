const FiltradoProductos = () => {
    const marcas = ['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4'];

    return (
        <div className="w-1/4 h-full mr-4 flex items-start top-80">
            <div className="filtrado-productos-container">
                <h3 className="font-bold mb-2">Marcas</h3>
                <div className="border-b mb-4"></div>
                {marcas.map((marca, index) => (
                    <p key={index} className="mb-1">
                        <span className="font-normal">{marca}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default FiltradoProductos;
