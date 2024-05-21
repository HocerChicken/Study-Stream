import * as AuthApi from '../api/AuthRequest'

const logIn = (formData) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' })
  try {
    const { data } = await AuthApi.logIn(formData)
    dispatch({ type: 'AUTH_SUCCESS', data: data })
  } catch (error) {
    dispatch({ type: 'AUTH_FAIL' })
  }
}

const signUp = (formData) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' })
  try {
    const { data } = await AuthApi.signUp(formData)
    dispatch({ type: 'AUTH_SUCCESS', data: data })
  } catch (error) {
    dispatch({ type: 'AUTH_FAIL' })
  }
}

const logOut = () => async (dispatch) => {
  dispatch({ type: 'AUTH_LOGOUT' })
}

export { logIn, signUp, logOut }
