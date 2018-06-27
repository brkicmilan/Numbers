import axios from 'axios';

export function getPhoneNumbers(
  limit = 10,
  start = 0,
  order = 'asc',
  list = ''
) {
  const request = axios.get(`/api/books?skip=${start}&limit=${limit}&order=${order}`)
    .then(response => {
      if (list) {
        return [...list, ...response.data]
      } else {
        return response.data
      }
    })

  return {
    type: 'GET_NUMBERS',
    payload: request
  }

}

export function getPhoneNumberWithReviewer(id) {
  const request = axios.get(`/api/getBook?id=${id}`)
    .then(response => response.data)

  return {
    type: 'GET_NUMBER',
    payload: request
  }
}


export function clearPhoneNumber() {
  return {
    type: 'CLEAR_NUMBER',
    payload: {}
  }
}

export function clearNumber() {
  return {
    type: 'CLEAR_NUMBERS',
    payload: {
      number: {},
      updateNumber: false,
      postDeleted: false
    }
  }
}

export function updatePhoneNumber(data) {
  const request = axios.post(`/api/book_update`, data)
    .then(response => response.data)

  return {
    type: 'UPDATE_BOOK',
    payload: request
  }
}


export function addNumber(number) {
  const request = axios.post('/api/book', number)
    .then(response => response.data);

  return {
    type: 'ADD_NUMBER',
    payload: request
  }
}

export function clearNewNumber() {
  return {
    type: 'CLEAR_NEWNUMBER',
    payload: {}
  }
}

export function deleteNumber(id) {
  const request = axios.delete(`/api/delete_book?id=${id}`)
    .then(response => response.data)

  return {
    type: 'DELETE_BOOK',
    payload: request
  }
}

export function getUserPosts(userId) {
  const request = axios.get(`/api/user_posts?user=${userId}`)
    .then(response => response.data)

  return {
    type: 'GET_USER_POSTS',
    payload: request
  }
}


//USER
export function loginUser({ email, password }) {
  const request = axios.post('/api/login', { email, password })
    .then(response => response.data)
  return {
    type: 'USER_LOGIN',
    payload: request
  }
}

export function auth() {
  const request = axios.get('/api/auth')
    .then(response => response.data)

  return {
    type: 'USER_AUTH',
    payload: request
  }
}

export function getUsers() {
  const request = axios.get(`/api/users`)
    .then(response => response.data)

  return {
    type: 'GET_USERS',
    payload: request
  }
}

export function userRegister(user, userList) {
  const request = axios.post(`/api/register`, user)

  return (dispatch) => {
    request.then(({ data }) => {
      let users = data.success ? [...userList, data.user] : userList;
      let response = {
        success: data.success,
        users
      }

      dispatch({
        type: 'USER_REGISTER',
        payload: response
      })

    })
  }
}