import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Importa todas las pantallas que has creado
import PantallaLogin from './pantallas/PantallaLogin';
import PantallaRegistro from './pantallas/PantallaRegistro';
import PantallaPrincipal from './pantallas/PantallaPrincipal';
import PantallaPerfil from './pantallas/PantallaPerfil';
import PantallaLactancia from './pantallas/PantallaLactancia';
import PantallaMomentos from './pantallas/PantallaMomentos';
import PantallaSalud from './pantallas/PantallaSalud';
import PantallaCrecimiento from './pantallas/PantallaCrecimiento';
import PantallaDiario from './pantallas/PantallaDiario';
import PantallaAgenda from './pantallas/PantallaAgenda';
import PantallaGuias from './pantallas/PantallaGuias';
import PantallaConsejos from './pantallas/PantallaConsejos';
import PantallaCalendario from './pantallas/PantallaCalendario';
import PantallaContactos from './pantallas/PantallaContactos';
import PantallaConsejosPreventivos from './pantallas/PantallaConsejosPreventivos';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={PantallaLogin} />
          <Route path="/registro" component={PantallaRegistro} />
          <Route path="/principal" component={PantallaPrincipal} />
          <Route path="/perfil" component={PantallaPerfil} />
          <Route path="/lactancia" component={PantallaLactancia} />
          <Route path="/momentos" component={PantallaMomentos} />
          <Route path="/salud" component={PantallaSalud} />
          <Route path="/crecimiento" component={PantallaCrecimiento} />
          <Route path="/diario" component={PantallaDiario} />
          <Route path="/agenda" component={PantallaAgenda} />
          <Route path="/guias" component={PantallaGuias} />
          <Route path="/consejos" component={PantallaConsejos} />
          <Route path="/calendario" component={PantallaCalendario} />
          <Route path="/contactos" component={PantallaContactos} />
          <Route path="/consejos-preventivos" component={PantallaConsejosPreventivos} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
