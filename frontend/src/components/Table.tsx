interface Column<T> {
  header: string
  accessor: keyof T
}

interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
}

export default function Table<T extends object>({ columns, data }: TableProps<T>) {
  return (
    <table className="w-full border-collapse bg-white shadow rounded">
      <thead className="bg-slate-800 text-white">
        <tr>
          {columns.map((c) => (
            <th key={String(c.accessor)} className="p-3 text-left">{c.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b hover:bg-slate-50">
            {columns.map((c) => (
              <td key={String(c.accessor)} className="p-3">{String(row[c.accessor])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}