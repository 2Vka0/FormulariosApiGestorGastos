import { useState } from "react";

export function FormularioMetodoPago() {
    const [nombreMetodo, setNombreMetodo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipoPago, setTipoPago] = useState('');

    function procesarFormulario(evento) {
        evento.preventDefault();
        const datosMetodoPago = {
            nombreMetodo,
            descripcion,
            tipoPago
        };
        console.log(datosMetodoPago);
    }

    return (
        <>
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registrar Metodo de pago</h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre del metodo de pago: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nombreMetodo}
                                        onChange={(evento) => setNombreMetodo(evento.target.value)}
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
                            <br />
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Tipo de pago </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={tipoPago}
                                        onChange={(evento) => setTipoPago(evento.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar metodo de pago</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}