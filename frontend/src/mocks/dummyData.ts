import type { Habitacion, Huesped, Reservacion } from '../types'

export const mockHabitaciones: Habitacion[] = [
  { idHabitacion: 1, numeroCuarto: 101, idTipo: 1, estado: 'Disponible', precioBase: 1200 },
  { idHabitacion: 2, numeroCuarto: 102, idTipo: 2, estado: 'Ocupada', precioBase: 2500 },
]

export const mockHuespedes: Huesped[] = [
  { idHuesped: 1, nombreCompleto: 'Ana López', documentoIdentidad: 'INE123456' },
  { idHuesped: 2, nombreCompleto: 'Carlos Ruiz', documentoIdentidad: 'PAS987654' },
]

export const mockReservaciones: Reservacion[] = [
  { idReservacion: 1, idHuesped: 1, idHabitacion: 2, fechaCheckin: '2026-11-10', fechaCheckout: '2026-11-12', totalEstimado: 5000 },
]