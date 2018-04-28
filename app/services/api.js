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
    axios.get('/cinema/get/all/visible')
  ),
  get: (id) => (
    axios.get(`/cinema/get/${id}`)
  ),
	delete: (id) => (
		axios.delete(`/cinema/delete/${id}`)
	),
  update: (data) => (
    axios.post('/cinema/update', data)
  ),
	modify: (data) => (
		axios.put('/cinema/modify', data)
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
    axios.get(`/cinema/get/${id}/halls/visible`)
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

export const ticketType = {
	all: () => (
		axios.get('/ticket/type/get/all')
	),
	update: (data) => (
		axios.post('/ticket/type/update', data)
	),
	delete: (id) => (
		axios.delete('/ticket/type/delete/' + id)
	),
};