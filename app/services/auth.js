import axios from 'config/axios';

export const auth = {

  authenticate({ headers: { authorization } }) {
    localStorage.setItem('__ut__', authorization)
    Object.assign(axios.defaults, {headers: {authorization: authorization}})
  }

}
