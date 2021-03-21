import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';


/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({
  children,
  redirectTo = '/contacts',
  ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children  : <Redirect to={redirectTo} />}
    </Route>
  );
}