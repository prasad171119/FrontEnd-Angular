
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})




@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
})
export class ContactItemComponent {
  @Input() contact: any;
  @Output() deleteContact = new EventEmitter<number>();

  onDelete(): void {
    this.deleteContact.emit(this.contact.id);
  }
}
