const api = "https://localhost:5001/api"

const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': true
  }
  

  export const SignUp = (userSignUp) =>
  fetch(`${api}/user/SignUp`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userSignUp)
  }).then(res => res.json())

  export const Login = (userLogin) =>
  fetch(`${api}/user/Login`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userLogin)
  }).then(res => res.json())
