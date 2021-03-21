const getIsAuthenticated = state => state.auth.isAuthenticated

const getUsername = state => state.auth.user.name

const getToken = state => state.auth.token




const authSelectors = {getIsAuthenticated, getUsername, getToken}
export default authSelectors