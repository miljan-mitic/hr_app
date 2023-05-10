import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent {
  @Input()
  public user?: User;

  @Output()
  selektovan: EventEmitter<User> = new EventEmitter<User>();
  
  clicked(event: Event) {
    this.selektovan.emit(this.user);
  }
}
