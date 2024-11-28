import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa todas las pantallas que has creado
import PantallaLogin from './pantallas/PantallaLogin/PantallaLogin';
import PantallaRegistro from './pantallas/PantallaRegistro/PantallaRegistro';
import PantallaPrincipal from './pantallas/PantallaPrincipal/PantallaPrincipal';
import PantallaPerfil from './pantallas/PantallaPerfil/PantallaPerfil';
import PantallaLactancia from './pantallas/PantallaLactancia/PantallaLactancia';
import PantallaMomentos from './pantallas/PantallaMomentos/PantallaMomentos';
import PantallaSalud from './pantallas/PantallaSalud/PantallaSalud';
import PantallaCrecimiento from './pantallas/PantallaCrecimiento/PantallaCrecimiento';
import PantallaDiario from './pantallas/PantallaDiario/PantallaDiario';
import PantallaAgenda from './pantallas/PantallaAgenda/PantallaAgenda';
import PantallaGuias from './pantallas/PantallaGuias/PantallaGuias';
import PantallaConsejos from './pantallas/PantallaConsejos/PantallaConsejos';
import PantallaCalendario from './pantallas/PantallaCalendario/PantallaCalendario';
import PantallaContactos from './pantallas/PantallaContactos/PantallaContactos';
import PantallaConsejosPreventivos from './pantallas/PantallaConsejosPreventivos/PantallaConsejosPreventivos';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PantallaLogin />} />
          <Route path="/registro" element={<PantallaRegistro />} />
          <Route path="/principal" element={<PantallaPrincipal />} />
          <Route path="/perfil" element={<PantallaPerfil />} />
          <Route path="/lactancia" element={<PantallaLactancia />} />
          <Route path="/momentos" element={<PantallaMomentos />} />
          <Route path="/salud" element={<PantallaSalud />} />
          <Route path="/crecimiento" element={<PantallaCrecimiento />} />
          <Route path="/diario" element={<PantallaDiario />} />
          <Route path="/agenda" element={<PantallaAgenda />} />
          <Route path="/guias" element={<PantallaGuias />} />
          <Route path="/consejos" element={<PantallaConsejos />} />
          <Route path="/calendario" element={<PantallaCalendario />} />
          <Route path="/contactos" element={<PantallaContactos />} />
          <Route path="/consejos-preventivos" element={<PantallaConsejosPreventivos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
