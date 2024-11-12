import { useState } from "react";

export function FormularioCategoria() {
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function procesarFormulario(evento) {
        evento.preventDefault();
        const datosCategoria = {
            nombreCategoria,
            descripcion
        };
        console.log(datosCategoria); 
    }

    return (
        <>
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registro de Categoría:</h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre de la categoría: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nombreCategoria}
                                        onChange={(evento) => setNombreCategoria(evento.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12">
                                    <label className="form-label">Descripción: </label>
                                    <textarea
                                        className="form-control"
                                        value={descripcion}
                                        onChange={(evento) => setDescripcion(evento.target.value)}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar Categoría</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
