import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between b">
        <Pizza className="h-5 w-5" />
        <span className="font-semibold">pizza.shop</span>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
