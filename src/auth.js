import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import Loading from './components/Loading'

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => !!state.user.username,
  wrapperDisplayName: 'UserIsAuthenticated',
  // Returns true if the user auth state is loading
  authenticatingSelector: state => state.user.isLoading,
  // Render this component when the authenticatingSelector returns true
  AuthenticatingComponent: Loading
})

export const userIsNotAuthenticated = connectedRouterRedirect({

  redirectPath: '/decks',

  allowRedirectBack: false,

  authenticatedSelector: state => !state.user.username,

  wrapperDisplayName: 'UserIsNotAuthenticated'
})

export default { userIsAuthenticated, userIsNotAuthenticated }
