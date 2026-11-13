export interface Habitacion {
  idHabitacion: number
  numeroCuarto: number
  idTipo: number
  estado: string
  precioBase: number
}

export interface Huesped {
  idHuesped: number
  nombreCompleto: string
  documentoIdentidad: string
}

export interface Reservacion {
  idReservacion: number
  idHuesped: number
  idHabitacion: number
  fechaCheckin: string
  fechaCheckout: string
  totalEstimado: number
}