import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg';
import { ShoppingPage } from "../02-components-pattern/pages/ShoppingPage";

export const NavigationBase = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="react logo"/>
        <ul>
          <li>
            <NavLink to={'/shopping'} className={({isActive}) => isActive ? 'nav-active': ''}>Shopping</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({isActive}) => isActive ? 'nav-active': ''}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/users'} className={({isActive}) => isActive ? 'nav-active': ''}>Users</NavLink>
          </li>
        </ul>
        </nav>

        <Routes>
          <Route path="users" element={ <h1>Users page</h1> }/>
          <Route path="about" element={ <h1>About page</h1>} />
          <Route path="shopping" element={ <ShoppingPage /> }/>

          <Route path="/*" element={ <Navigate to={'/shopping'} replace /> }/>

        </Routes>

      </div>
    </BrowserRouter>
  )
}
