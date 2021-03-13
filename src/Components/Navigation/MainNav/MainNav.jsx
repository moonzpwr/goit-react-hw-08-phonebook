import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import s from '../Navigation.module.css'
import routes from '../../../routes'
import authSelectors from '../../../redux/auth/auth-selectors'


 function MainNav({isAuthenticated}) {
  return (<ul className={s.navList}>
    <li><NavLink to={routes.home} className={s.navLink} activeClassName={s.navLinkActive} exact>Home</NavLink></li>
    {isAuthenticated && 
    <li><NavLink to={routes.phonebook} className={s.navLink} activeClassName={s.navLinkActive}>Phonebook</NavLink></li>}
        
      </ul>)
    
}

const mapStateToProps = state => ({
isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(MainNav)