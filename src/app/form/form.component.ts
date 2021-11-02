import {Component, ComponentFactoryResolver, OnInit, ViewChild,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../services/data.service";
import {ToDo} from "../shared/todo.model";
import {FormModalComponent} from "./form-modal/form-modal.component";
import {RefDirective} from "../shared/ref.directive";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  form!: FormGroup

  @ViewChild(RefDirective) refDir!: RefDirective

  constructor(public dataService: DataService, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      symbols: new FormControl('', [
        Validators.required, Validators.pattern( '^[а-яА-яa-zA-Z0-9]')]),
      currentDate: new FormControl(),
      expirationDate: new FormControl()
    })
  }

  submit() {
      const todo: ToDo = {
        id: this.dataService.id,
        text: this.form.value.text,
        creationDate: new Date(),
        expirationDate: new Date(+new Date() + 24*60*60*1000),
        completed: false
      }
      this.dataService.id++
      this.dataService.addTodo(todo)
    }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(FormModalComponent)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(modalFactory)
  }
}
