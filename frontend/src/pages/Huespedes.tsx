import Table from '../components/Table'
import { mockHuespedes } from '../mocks/dummyData'

export default function Huespedes() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Huéspedes</h1>
      <Table
        data={mockHuespedes}
        columns={[
          { header: 'ID', accessor: 'idHuesped' },
          { header: 'Nombre', accessor: 'nombreCompleto' },
          { header: 'Documento', accessor: 'documentoIdentidad' },
        ]}
      />
    </>
  )
}