import axios from 'config/axios';

const storageToken = '__ut__'

export const auth = {

  history: null,
  user: null,

  init(history) {
    this.history = history
    let ut = localStorage.getItem(storageToken)
    if (ut) {
      this.user = ut
    }
  },

  authenticate({ headers: { authorization } }) {
		this.user = authorization;
		localStorage.setItem(storageToken, authorization)
    Object.assign(axios.defaults, {headers: {authorization: authorization}})
  },

  logout() {
    this.user = null
    localStorage.removeItem(storageToken)
		this.history.push('/')
  }

}
