// import { NavLink } from "react-router-dom";
// import s from '../Navigation.module.css'
// import routes from '../../../routes'

import { connect } from "react-redux"
import authSelectors from '../../../redux/auth/auth-selectors'
import authOperations from '../../../redux/auth/auth-operations'
import defaultAvatar from './user.svg'
import s from './UserMenu.module.css'

 function UserMenu({avatar, name, onLogout}) {
    return (
        <div className={s.container}>
            <img src={avatar} alt='' width='30' />
            <span>Welcome, {name}!</span>
            <button type='button' onClick={onLogout}>Logout</button>
        </div>
    )
    
}

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
    avatar: defaultAvatar
})

const mapDispatchToProps = {
    onLogout: authOperations.logOut
}


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)