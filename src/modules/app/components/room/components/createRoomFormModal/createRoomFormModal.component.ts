import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './createRoomFormModal.component.html'
})
export class CreateRoomFormModalComponent {

  @Input() createRoomForm: FormGroup;
  @Output() onCreateRoom = new EventEmitter<NewRoom>();

  constructor(
    public modal: NgbActiveModal
  ) { }

  createRoom() {
    this.onCreateRoom.emit(this.createRoomForm.value);
    this.modal.close('Save click');
  }

  isInvalid(control: string): boolean {
    const isValid = this.createRoomForm.get(control).valid;
    const isTouched = this.createRoomForm.get(control).touched;
    return !isValid && isTouched;
  }

}
