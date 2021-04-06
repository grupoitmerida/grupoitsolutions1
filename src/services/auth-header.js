export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.auth) {

      //console.log('prueba auth-header: ', user);
      return{
        Authenticate: user.auth
      };
    } else {
      console.log('no autenticado');
      return {};
    }
  }
  