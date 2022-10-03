import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces";

@Injectable({providedIn: 'root'})

export class RegisrService {
    url = 'https://immense-badlands-47107.herokuapp.com/auth/signUp'

    constructor(private http: HttpClient) {
    }

    login(model: User) {
        return this.http.post(this.url, model)
    }
}