
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contactServes';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})





export class ContactListComponent implements OnInit {
  contacts:any[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  onDeleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    });
  }
}
