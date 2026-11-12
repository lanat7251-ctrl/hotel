import { NavLink, Outlet } from 'react-router-dom'

interface LayoutProps {
  titulo: string
  links: { to: string; label: string }[]//funciona para colocar 
}

export default function Layout({ titulo, links }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-900 text-white p-4">   
        <h2 className="text-xl font-bold mb-6">{titulo}</h2> 
        <nav className="flex flex-col gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `p-2 rounded ${isActive ? 'bg-slate-700' : 'hover:bg-slate-800'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-slate-100">
        <Outlet />
      </main>
    </div>
  )
}