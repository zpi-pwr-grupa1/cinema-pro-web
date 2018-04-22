import axios from 'config/axios';

export const user = {
  register: (form) => (
    axios.post('/user/register', form)
  ),
  login: (form) => (
    axios.post('/user/login', form)
  )
}

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
  get: (id) => (
    axios.get(`/movie/get/${id}`)
  ),
  new: (data) => (
    axios.post('/movie/update', data)
  ),
};

export const showing = {
  all: () => (
    axios.get('/showing/get/all')
  ),
  update: (data) => (
    axios.post('/showing/update', data)
  ),
	delete: (id) => (
		axios.delete('/showing/delete/' + id)
	),
  allForCinema: (id) => (
		axios.get(`/cinema/get/${id}/showings`)
	)
}

export const hall = {
  all: () => (
    axios.get('/hall/get/all')
  ),
  update: (data) => (
    axios.post('/hall/update', data)
  ),
  delete: (id) => (
    axios.delete('/hall/delete/' + id)
  ),
  allForCinema: (id) => (
    axios.get(`/hall/get/${id}`)
  ),
};

export const seat = {
  all: () => (
    axios.get('/seat/get/all')
  ),
  get: (id) => (
    axios.get(`/seat/get/${id}`)
  ),
  new: (data) => (
    axios.post('/seat/update', data)
  ),
};
