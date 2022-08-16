export const userLogin = (email, password) => {
  const token = "nestoooooooo";
  return ({
    type: 'LOGIN',
    payload: token
  })
}

export const userLogout = () => {
  return({
    type: "LOGOUT"
  })
}