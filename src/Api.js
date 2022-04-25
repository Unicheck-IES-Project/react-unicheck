import axios from 'axios';
class Api {
    constructor(  ){
        this.baseUrl = "http://localhost:8080/"
        this.axios = axios;
    }
    // setToken( token ) {
    //     localStorage.setItem("token", token);
    // }
    get( url ){ 
        axios.get(
                this.baseUrl + url
            ).then(res => {
                if(res.ok){
                    return res.json();
                }else{
                    throw res;
                }
            })
             .catch(error => { throw error }) 
    }
    post( url, data ){ 
        
        return fetch(
                this.baseUrl + url, 
                {
                    method: 'POST', 
                    body: JSON.stringify(data), 
                    headers:{
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${this.token}`
                }
            }).then(res => {
                
                if( res.ok ){
                    return res.json();
                }else{ throw res;}
            })
              .catch(error => { throw error; })
    }
}
export default Api