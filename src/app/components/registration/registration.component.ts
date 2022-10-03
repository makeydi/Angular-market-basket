import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces";
import {RegisrService} from "../../services/regisr.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    hide = true;
    form: FormGroup

    constructor(public fb: FormBuilder, private reg: RegisrService, private router: Router) {
        this.form = this.fb.group({
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6)]]
            }
        )
    }

    submit() {
        if (this.form.invalid) {
            return
        }

        const user: User = {
            email: this.form.value.email,
            password: this.form.value.password
        }

        console.log(JSON.stringify(user))

        this.reg.login(user).subscribe((response) => {
            console.log('ok')
            this.form.reset()
            this.router.navigate(['basket'])
        })
    }
}

