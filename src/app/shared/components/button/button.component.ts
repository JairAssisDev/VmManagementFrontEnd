import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type buttonColor = 'green' | 'blue' | 'outline' 
export type buttonSize = 'extra-small' |'small' | 'medium' | 'large' | 'fill'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  buttonColor = input<buttonColor>("blue")
  size = input<buttonSize>("fill")
  isDisabled = input<boolean>(false)

  getClassList(){
    return this.buttonColor() + ' ' + this.size() ;
  }
}
