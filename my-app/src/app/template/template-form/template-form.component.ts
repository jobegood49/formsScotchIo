import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  userName: string;
  userUserame: string;


  constructor() { }

  ngOnInit() {
  }

  get diagnostic() {
    return JSON.stringify({
      name: this.userName,
      username: this.userUserame
    })
  }



}
