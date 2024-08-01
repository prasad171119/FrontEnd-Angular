
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contactServes';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contats-form',
  standalone: true,
  imports: [],
  templateUrl: './contats-form.component.html',
  styleUrl: './contats-form.component.scss'
})


export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.contactId = +id;
        this.contactService.getContactById(this.contactId).subscribe(contact => {
          this.contactForm.patchValue(contact);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contact: any = this.contactForm.value;
      if (this.contactId) {
        contact.id = this.contactId;
        this.contactService.updateContact(contact).subscribe(() => {
          this.router.navigate(['/contacts']);
        });
      } else {
        this.contactService.addContact(contact).subscribe(() => {
          this.router.navigate(['/contacts']);
        });
      }
    }
  }
}
