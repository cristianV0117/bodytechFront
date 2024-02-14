const Page = async () => {

    const response = await fetch(`http://127.0.0.1:8000/api/products`, {
        cache: 'no-store',
        method: 'GET'
    })

    const products = await response.json()

    return (
        <>
            <div className="container col-md-12 mt-5"  >
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-center">Productos</h2>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nombre producto</th>
                                    <th>Precio</th>
                                    <th>Status</th>
                                    <th>Usuario</th>
                                    <th>Email usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                products.map((child) => (
                                    <tr>
                                        <td>{child.name}</td>
                                        <td>{child.price}</td>
                                        <td><span className="badge bg-success">Activo</span></td>
                                        <td>{child.user.name}</td>
                                        <td>{child.user.email}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page