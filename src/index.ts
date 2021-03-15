import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'Ethan',
  age: 30,
});

axios.get('http://localhost:3000/users/1');
