import { useState } from "react";

export function FormularioGasto() {
    const [nombreGasto, setNombreGasto] = useState('');
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function procesarFormulario(evento) {
        evento.preventDefault();
        const datosGasto = {
            nombreGasto,
            monto,
            fecha,
            descripcion
        };
        console.log(datosGasto);
    }

    return (
        <>
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registro de Gasto:</h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre del gasto: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nombreGasto}
                                        onChange={(evento) => setNombreGasto(evento.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Monto: </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={monto}
                                        onChange={(evento) => setMonto(evento.target.value)}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Fecha: </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={fecha}
                                        onChange={(evento) => setFecha(evento.target.value)}
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
                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar Gasto</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
