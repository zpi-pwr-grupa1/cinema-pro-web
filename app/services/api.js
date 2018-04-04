import axios from 'config/axios';

export const cinema = {
  all: () => (
    axios.get('/cinema/get/all')
  ),
  get: (id) => (
    axios.get(`/cinema/get/${id}`)
  ),
  new: (data) => (
    axios.post('/cinema/update', data)
  ),
};

export const movie = {
  all: () => (
    axios.get('/movie/get/all')
  ),
  new: (data) => (
    axios.post('/movie/update', data)
  ),
};
