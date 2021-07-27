import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent implements OnInit {
  

  public availableEmails = [
    {
      value: 1,
      label: 'samra.hanif@yahoo.com'
    },
    {
      value: 2,
      label: 'john.lot@hotmail.com'
    },
    {
      value: 3,
      label: 'allen.richardo@yahoo.com'
    },
  ];
  public errorMessages = {
    'pattern': 'Email must be in format abc@abc.com',
  };
  public validators = [this.checkPattern];


@ViewChild('form', { static: false }) form: NgForm;
	public dataModel: any;
	public editorTextCount = 0;
	public isSubmitted: boolean = false;
	public isFieldEmpty: boolean = false;
	public isMaxLengthLimitReached: boolean = false;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '200px',
    width: 'auto',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter your email',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [],
      ['customClasses', 'insertImage', 'insertVideo', 'toggleEditorMode'],
    ],
  };
  public formDetails = {
    subject: '',
    body: '',
  };
 public  items = ['Pizza', 'Pasta', 'Parmesan'];
  constructor() { }

  ngOnInit() {
  }

  public sendEmail():void{
    console.log(this.form.value)
  }

  private checkPattern(control: FormControl) {
    const patternRegex = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (patternRegex.test(control.value)) {
      console.log("Match exists.");
    }
    else {
      return { 'pattern': true }
    }
  }

}


