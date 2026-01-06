import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Empresas from "../pages/Empresas";
import Acceso from "../pages/Acceso";

// Servicios dropdown pages
import Especialidades from "../pages/servicios/Especialidades";
import ChatMedico from "../pages/servicios/ChatMedico";
import VideollamadaAgendada from "../pages/servicios/VideollamadaAgendada";
import CuadroMedico from "../pages/servicios/CuadroMedico";
import Urgencias from "../pages/servicios/Urgencias";
import VideollamadaInmediata from "../pages/servicios/VideollamadaInmediata";
import Farmacias from "../pages/servicios/Farmacias";
import RecetaDigital from "../pages/servicios/RecetaDigital";

// Para Quién dropdown pages
import Personal from "../pages/para-quien/Personal";
import EmpresasPQ from "../pages/para-quien/Empresas";
import Corporaciones from "../pages/para-quien/Corporaciones";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // Páginas principales
      { path: "servicios", element: <Servicios /> },
      { path: "empresas", element: <Empresas /> },
      { path: "acceso", element: <Acceso /> },

      // Dropdown Servicios
      { path: "servicios/especialidades", element: <Especialidades /> },
      { path: "servicios/chat-medico", element: <ChatMedico /> },
      { path: "servicios/videollamada-agendada", element: <VideollamadaAgendada /> },
      { path: "servicios/cuadro-medico", element: <CuadroMedico /> },
      { path: "servicios/urgencias", element: <Urgencias /> },
      { path: "servicios/videollamada-inmediata", element: <VideollamadaInmediata /> },
      { path: "servicios/farmacias", element: <Farmacias /> },
      { path: "servicios/receta-digital", element: <RecetaDigital /> },

      // Dropdown Para Quién
      { path: "para-quien/personal", element: <Personal /> },
      { path: "para-quien/empresas", element: <EmpresasPQ /> },
      { path: "para-quien/corporaciones", element: <Corporaciones /> },

    ],
  },
]);
