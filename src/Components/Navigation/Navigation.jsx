import { connect } from "react-redux";
import MainNav from "./MainNav/MainNav";
import AuthNav from './AuthNav/AuthNav'
import UserMenu from './UserMenu/UserMenu'
import s from './Navigation.module.css'
import authSelectors from '../../redux/auth/auth-selectors'



 function Navigation({ isAuthenticated }) {
  return (
    <div className={s.container}>
      <MainNav />
      {isAuthenticated ? <UserMenu/> : <AuthNav/>}
    
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps, null)(Navigation)