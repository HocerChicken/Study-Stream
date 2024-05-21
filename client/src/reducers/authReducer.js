const initialState = {
  authData: null,
  loading: false,
  error: false,
  updateLoading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, loading: true, error: false }
    case 'AUTH_SUCCESS':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return { ...state, authData: action.data, loading: false, error: false }
    case 'AUTH_FAIL':
      return { ...state, loading: false, error: true }
    case 'AUTH_LOGOUT':
      localStorage.clear()
      return { ...state, authData: null, loading: false, error: false }
    case 'UPDATE_USER_START':
      return { ...state, updateLoading: true, error: false }
    case 'UPDATE_USER_SUCCESS':
      console.log(action?.data)
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return {
        ...state,
        authData: action.data,
        updateLoading: false,
        error: false,
      }
    case 'UPDATE_USER_FAIL':
      return { ...state, updateLoading: false, error: true }
    default:
      return state
  }
}
export default authReducer
