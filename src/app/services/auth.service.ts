import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../interfaces";
import {Observable, Subject, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators"

@Injectable()
export class AuthService {

    public error$: Subject<string> = new Subject<string>()

    constructor(private http: HttpClient) {
    }

    get token(): any {
        return localStorage.getItem('token')
    }

    login(user: User): Observable<any> {
        return this.http.post(`https://immense-badlands-47107.herokuapp.com/auth/signIn`, user)
            .pipe(
                tap(this.setToken),
                catchError(this.handleError.bind(this))
            )
    }

    logout() {
        this.setToken(null)
    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    private handleError(error: HttpErrorResponse) {
        const {message} = error.error
        this.error$.next(message)
        return throwError(error)
    }

    private setToken(response: any) {
        if (response) {
            localStorage.setItem('token', response.token)
        } else {
            localStorage.clear()
        }
    }
}