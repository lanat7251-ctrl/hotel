import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Habitaciones from './pages/Habitaciones'
import Huespedes from './pages/Huespedes'
import Placeholder from './pages/Placeholder'

const adminLinks = [
  { to: '/admin/usuarios', label: 'Gestión de Usuarios - ' },
  { to: '/admin/habitaciones', label: 'Habitaciones y Tipos - ' },
  { to: '/admin/servicios', label: 'Servicios y Amenidades - ' },
  { to: '/admin/reportes', label: 'Mantenimiento y Reseñas' },
]

const recepcionLinks = [
  { to: '/recepcion/huespedes', label: 'Huéspedes - ' },
  { to: '/recepcion/reservaciones', label: 'Reservaciones - ' },
  { to: '/recepcion/checkin', label: 'Check-in / Check-out - ' },
  { to: '/recepcion/pagos', label: 'Pagos y Facturas' },
]

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/habitaciones" />} />

      <Route path="/admin" element={<Layout titulo="Administrador" links={adminLinks} />}>
        <Route path="usuarios" element={<Placeholder titulo="Usuarios" />} />
        <Route path="habitaciones" element={<Habitaciones />} />
        <Route path="servicios" element={<Placeholder titulo="Servicios y Amenidades" />} />
        <Route path="reportes" element={<Placeholder titulo="Mantenimiento y Reseñas" />} />
      </Route>

      <Route path="/recepcion" element={<Layout titulo="Recepción" links={recepcionLinks} />}>
        <Route path="huespedes" element={<Huespedes />} />
        <Route path="reservaciones" element={<Placeholder titulo="Reservaciones" />} />
        <Route path="checkin" element={<Placeholder titulo="Check-in / Check-out" />} />
        <Route path="pagos" element={<Placeholder titulo="Pagos y Facturas" />} />
      </Route>
    </Routes>
  )
}