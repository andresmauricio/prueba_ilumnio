import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/core/register.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public listProgram: any;
  constructor(
    private build: FormBuilder,
    private registerServices: RegisterService
  ) {
    this.buildForm();
    this.getList();
  }

  private buildForm() {
    this.form = this.build.group({
      name: ['', [Validators.required]],
      program: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  private getList() {
    this.registerServices.getPrograms().subscribe((response: any) => {
      this.listProgram = response;
    });
  }

  public isInvalid(control) {
    return (
      !this.form.controls[control].valid &&
      (this.form.controls[control].dirty || this.form.controls[control].touched)
    );
  }
  public isValid(control) {
    return this.form.controls[control].valid;
  }

  public sendRegister() {
    const isValid = this.form.valid;
    const body = this.form.value;
    if (isValid) {
      this.registerServices.register(body).subscribe(response => {
        Swal.fire({text: "Registro completado", icon: "success"})
          .then(() => {
            this.form.reset();
          })
      });
    } else {
      this.form.markAllAsTouched()
    }
  }

  ngOnInit(): void {}
}
