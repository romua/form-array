import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss']
})
export class GlobalSettingsComponent implements OnInit {
  templateDrivenValue = false;
  formWithArray: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formWithArray = this.fb.group({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      age: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      skills: this.fb.array([
        new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
      ]),
    });
  }

  ngOnInit() {
  }

  createSkillControl(): FormControl {
    return new FormControl(
      '', Validators.required
    );
  }

  addSkillControl(): void {
    const skillsControl = this.formWithArray.get('skills') as FormArray;
    skillsControl.push(this.createSkillControl());
  }

  removeSkillControl(index: number): void {
    const skillsControl = this.formWithArray.get('skills') as FormArray;

    if (skillsControl.length >= index) {
      skillsControl.removeAt(index);
    }
  }
}
