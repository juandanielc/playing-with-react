const baseUrl = 'http://elrincondepascalito.juan.dev';
const urlHeroes = baseUrl + '/api/heroes';
const urlAuth = baseUrl + "/jwt/app/";

const getHeader = () => (
    sessionStorage.getItem('jwtToken') ? 
    {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
    }
    :
    {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  )

export const loadHeroes = () => fetch(urlHeroes,{
        headers: getHeader()
      }).then((response) => {
          return response.json()
      });

export const removeHero = (id) => fetch(urlHeroes + '/' + id, {
  method: 'DELETE',
  headers: getHeader(),
    body: JSON.stringify({id: id})
  });


export const addHero = (hero) => fetch(urlHeroes, {
    method: 'POST',
    headers: getHeader(),
      body: JSON.stringify(hero)
    }).then(function(response) {
      return response.json();
    });

export const updateHero = (hero) => {
  return fetch(urlHeroes + '/' + hero.id, {
    method: 'PUT',
    headers: getHeader(),
      body: JSON.stringify(hero)
    }).then(function(response) {
      return response.json();
    });
  }

export const auth = (data) => fetch(urlAuth, {
    method: 'POST',
    headers: getHeader(),
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json();
    });