import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter, input } from '@angular/core';
type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Output("submit") onsubmit = new EventEmitter();

  submit() {
    this.onsubmit.emit();
  }
}
