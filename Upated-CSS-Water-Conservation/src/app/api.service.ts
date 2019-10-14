import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    constructor(public http: Http){}


    users = []

    getUsers() {
        this.http.get('http://localhost:3000/users').subscribe(res =>{
        this.users = res.json()
        })

    }
    getProfile(id) {
        return this.http.get('http://localhost:3000/profile/' +id)
       
    }
   


    sendUserRegisteration(regData) {
        this.http.post('http://localhost:3000/register', regData).subscribe(res =>{
        })

    }
   
    loginUser(loginData) {
        this.http.post('http://localhost:3000/login', loginData).subscribe(res =>{
        console.log(res.json()._id);
        //console.log('thois ihgdhgdgfd' + res.ok);
        localStorage.setItem('id',res.json()._id)
        })

    }
   

    }
