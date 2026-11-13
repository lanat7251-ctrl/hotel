import Table from '../components/Table'
import { mockHabitaciones } from '../mocks/dummyData'

export default function Habitaciones() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Habitaciones</h1>
      <Table
        data={mockHabitaciones}
        columns={[
          { header: 'ID', accessor: 'idHabitacion' },
          { header: 'Cuarto', accessor: 'numeroCuarto' },
          { header: 'Estado', accessor: 'estado' },
          { header: 'Precio base', accessor: 'precioBase' },
        ]}
      />
    </>
  )
}