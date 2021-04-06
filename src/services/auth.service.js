import axios from 'axios';

const API_URL = 'https://diesel.grupoitsur.com/api/login';

class AuthService {
  login(user) {
    return axios
        .post(API_URL + '', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.auth) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log('usuario: ',response.data.auth);
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
