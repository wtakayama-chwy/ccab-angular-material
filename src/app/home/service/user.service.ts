import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

const API = environment.ApiUrl;
@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    public listAllUsers() {
        return this.http.get<User[]>(API);
    }

    public listUserDetail(id) {
        const url = `${API}/${id}`
        return this.http.get(url);
    }
}