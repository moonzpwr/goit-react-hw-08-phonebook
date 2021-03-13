import { NavLink } from "react-router-dom";
import s from '../Navigation.module.css'
import routes from '../../../routes'

export default function AuthNav() {
  return (<ul className={s.navList}>
        <li><NavLink to={routes.registration} className={s.navLink} activeClassName={s.navLinkActive}>Sign up</NavLink></li>
        <li><NavLink to={routes.login} className={s.navLink} activeClassName={s.navLinkActive}>Sign in</NavLink></li>
      </ul>)
    
}