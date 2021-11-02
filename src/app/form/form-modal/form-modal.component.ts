import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  @Input() title = 'Dynamic title'
  currentDate = ''
  expirationDate = ''

  @Output() close = new EventEmitter()
  save = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
  }

}
