import React from 'react'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div>
      <h1>This is Navbar</h1>
      <main>
        <Outlet/>
      </main>
      <h2>This is footer</h2>
    </div>
  )
}

export default App