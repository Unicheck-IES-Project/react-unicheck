import axios from 'axios';
class Api {
    constructor(  ){
        this.baseUrl = "http://localhost:8080/"
        this.axios = axios;
    }

    agregarToken(id) {
        localStorage.setItem("id", id);
    }
    getStudentId() {
        return localStorage.getItem("id");
    }

    get( url ){
        return fetch(
            this.baseUrl + url,
        ).then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw res;
            }
        })
            .catch(error => { throw error })
    }

    delete( url ) {
        return fetch ( this.baseUrl + url, {method:"DELETE"})
    }

    post( url, data ){ 
        
        return fetch(
                this.baseUrl + url, 
                {
                    method: 'POST', 
                    body: JSON.stringify(data),
                    headers:{
                    'Content-Type': 'application/json'
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