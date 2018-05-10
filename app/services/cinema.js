import axios from 'config/axios';

const storageToken = '__sc__'

export const cinema = {

  current: null,

  init() {
    let sc = JSON.parse(localStorage.getItem(storageToken))
    if (sc) {
      this.current = sc
    }
  },

  select(cinema) {
		this.current  = cinema;
		localStorage.setItem(storageToken, JSON.stringify(cinema))
  },

  logout() {
    this.user = null
    localStorage.removeItem(storageToken)
		this.history.push('/')
  }

}
