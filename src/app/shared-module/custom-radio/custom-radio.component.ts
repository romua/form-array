import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomRadioComponent,
    multi: true
  }]
})
export class CustomRadioComponent implements ControlValueAccessor {
  private innerValue;

  public set value(newValue) {
    if (this.elemRef.nativeElement.disabled) {
      return;
    }

    this.innerValue = newValue;

    if (this.onChange) {
      this.onChange(newValue);
    }
  }

  public get value() {
    return this.innerValue;
  }

  @HostListener('click', ['$event.target']) onClick() {
    this.value = !this.innerValue;
  }

  onChange = (_: any) => {
    console.log('i was changed');
  };

  onTouched = () => {
    console.log('i was touched');
  };

  constructor(private renderer: Renderer2, private elemRef: ElementRef) {
  }

  writeValue(value: any): void {
    console.log(value);
    this.value = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('isDisabled', isDisabled);
    this.renderer.setProperty(this.elemRef.nativeElement, 'disabled', isDisabled);
  }
}
