import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://diesel.grupoitsur.com/api/';

class BasicService {
    getProfile(){
        return axios.get(API_URL+'user', {headers: authHeader() });
    }
    getDevices(){
        return axios.get(API_URL+ 'devices', {headers: authHeader() });
    }
    getVehicles(){
        return axios.get(API_URL+'vehicles', {headers: authHeader() });
    }
    getSims(){
        return axios.get(API_URL+'sims', { headers: authHeader() });
    }
    getAssets(){
        return axios.get(API_URL+'assets', {headers: authHeader() });
    }
}
export default new BasicService();