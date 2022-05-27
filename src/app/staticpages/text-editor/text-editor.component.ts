import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.less']
})
export class TextEditorComponent implements OnInit {
  formdata!: FormGroup;
  description: any = 'text Editor';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(400), Validators.minLength(5)]]
    });
  }

  RegisterText(data: any) {
    console.log(this.formdata.value);
    if (this.formdata.invalid) {
      this.formdata.get('description')?.markAsTouched();
    }
  }
}
