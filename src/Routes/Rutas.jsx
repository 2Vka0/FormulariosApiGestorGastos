import { Routes, Route } from "react-router-dom";
import { Menu } from "../Components/common/Menu/Menu";
import { Home } from "../Components/pages/Home/Home";
import { Usuarios } from "../Components/pages/Usuarios/Usuarios";
import { Gastos } from "../Components/pages/Home/Gastos/Gastos";
import { Categorías } from "../Components/pages/Home/Categorias/Categorias";
import { MetodoPago } from "../Components/pages/MetodoPago/MetodoPago";
export function Rutas() {
    return (
        <>
            <Menu />  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/gastos" element={<Gastos />} />
                <Route path="/categoria" element={<Categorías />} />
                <Route path="/metodoPago" element={<MetodoPago />} />
                
            </Routes>
        </>
    );
}
