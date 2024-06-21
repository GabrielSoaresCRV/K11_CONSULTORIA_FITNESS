import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'newsleter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsleter-form.component.html',
  styleUrls: ['./newsleter-form.component.scss']
})
export class NewsleterFormComponent {

  newsleterForm: FormGroup;

  constructor() {
    this.newsleterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.newsleterForm.valid) {
      console.log(this.newsleterForm.value);
      // Handle form submission logic here, such as sending data to a server
    } else {
      console.log('Form is not valid');
    }
  }
}
