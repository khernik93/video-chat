import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateRoomFormModalComponent } from './components/createRoomFormModal/createRoomFormModal.component';

@Component({
  selector: 'room-component',
  styleUrls: ['./room.component.scss'],
  templateUrl: './room.component.html'
})
export class RoomComponent implements OnInit {

  @Input() createRoomForm: FormGroup;
  @Input() joinRoomForm: FormGroup;
  @Output() onJoinRoom = new EventEmitter<NewRoom>();

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.buildCreateRoomForm();
    this.buildJoinRoomForm();
  }

  private buildCreateRoomForm() {
    this.createRoomForm = new FormGroup({
      key: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  private buildJoinRoomForm() {
    this.joinRoomForm = new FormGroup({
      id: new FormControl('', Validators.required),
      key: new FormControl('', Validators.required)
    });
  }

  isInvalid(control: string): boolean {
    const isValid = this.joinRoomForm.get(control).valid;
    const isTouched = this.joinRoomForm.get(control).touched;
    return !isValid && isTouched;
  }

  showCreateRoomFormModal() {
    const modalRef = this.modalService.open(CreateRoomFormModalComponent);
    modalRef.componentInstance.createRoomForm = this.createRoomForm;
    modalRef.componentInstance.onCreateRoom
      .subscribe((newRoom: NewRoom) => this.onJoinRoom.emit(newRoom));
  }

  joinRoom() {
    this.onJoinRoom.emit(this.joinRoomForm.value);
  }

}
