const api = "https://localhost:6001/api"

const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': true
  }
  

  export const getAll = () =>
  fetch(`${api}/lesson`, { headers })
    .then(res => res.json())
    .then(data => data.items)


  export const getByCriteria = (criteria) =>
    fetch(`${api}/lesson/criteria/${criteria}`, { headers })
      .then(res => res.json())
      .then(data => data.items)