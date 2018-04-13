import axios from 'config/axios';

export const auth = {

  authenticate({ headers: { authorization } }) {
    Object.assign(axios.defaults, {headers: {authorization: authorization}})
  }

}