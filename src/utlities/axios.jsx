import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWExODgyNTQ1MzQyNjBjMzNkZjg1NTJiMjI3YzBjNSIsInN1YiI6IjY2MjBkM2VlOTY2MWZjMDE2NWZmOGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5oowgBup0d9Rouj0o_idDArtfporusw8ShTbQ2TIFI'
      }
})

export default instance;