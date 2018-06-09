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
    addHallToCinema: (id, columns, rows, hallNumber) => (
        axios.put(`/cinema/${id}/put/hall/${columns}/${rows}`, {hallNumber})
    ),
};

export const movie = {
    all: () => (
        axios.get('/movie/get/all/visible')
    ),
    get: (id) => (
        axios.get(`/movie/get/${id}`)
    ),
    new: (data) => (
        axios.post('/movie/update', data)
    ),
    delete: (id) => (
        axios.delete('/movie/delete/' + id)
    ),
};

export const showing = {
    get: (id) => (
        axios.get(`/showing/get/${id}`)
    ),
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
    ),
    allPlannedForCinema: (id) => (
        axios.get(`/cinema/get/${id}/showings/planned`)
    ),
    allForCinemaWithDate: (id, date) => (
			axios.get(`/cinema/get/${id}/showings/${date.format('YYYY-MM-DD')}`)
		),
    getSeats: (id) => (
      axios.get(`/showing/get/${id}/seats`)
    ),
}

export const hall = {
    all: () => (
        axios.get('/hall/get/all')
    ),
    get: (id) => (
        axios.get(`/hall/get/${id}`)
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
    createMultipleSeats: (data) => (
        axios.get('/hall/createseats')
    ),
    getColumnsAndRows: (id) => (
        axios.get(`/hall/get/${id}/columnsandrows`)
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
        axios.get('/ticket/type/get/all/visible')
    ),
    update: (data) => (
        axios.post('/ticket/type/update', data)
    ),
    delete: (id) => (
        axios.delete('/ticket/type/delete/' + id)
    ),
};

export const employee = {
    all: () => (
        axios.get('/employee/get/all')
    ),
    get: (id) => (
        axios.get(`/employee/get/${id}`)
    ),
    update: (data) => (
        axios.post('/employee/update', data)
    ),
    delete: (id) => (
        axios.delete('/employee/delete/' + id)
    ),
    modify: (data) => (
        axios.put('/employee/modify', data)
    ),
    allForCinema: (id) => (
        axios.get(`/cinema/get/${id}/employees`)
    ),
};

export const client = {
    all: () => (
        axios.get('/client/get/all')
    ),
    update: (data) => (
        axios.post('/client/update', data)
    ),
    get: (id) => (
        axios.get(`/client/get/${id}`)
    ),
    getReservations: (id) => (
        axios.get(`/client/get/${id}/reservations`)
    ),
};

export const movieGroup = {
    all: () => (
        axios.get('/movieGroup/get/all')
    ),
};

export const reservation = {
	book: (form) => (
		axios.post('/reservation/book', form)
	),
};