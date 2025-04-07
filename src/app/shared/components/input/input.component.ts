import { CommonModule } from '@angular/common';
import { Component, inject, input, model } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

export type inputSize = 'small' | 'medium' | 'large' | 'fill';
export type inputType = "text" | "password" | "email" | "number"


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {

  label = input<string>();          
  placeholder = input.required<string>(); 
  size = input<inputSize>('fill');
  isInvalid = input<boolean>(false);
  type = input<inputType>("text")

  value = model<any>();

  constructor() {
    if(this.ngControl) this.ngControl.valueAccessor = this;      
  } 

  getClassList() {
    return this.size() + ' ' + (this.isInvalid() ? 'is-invalid' : '');
  }

  private ngControl = inject(NgControl, { optional: true});
  protected onTouched?: () => {};
  protected onChange?: (value: any) => {};
  protected isDisabled = false;

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
