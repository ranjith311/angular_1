import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  title: string = 'Dashboard';
  isDisabled:boolean = true
  inputValue:string = "Learn Angular"

  @Input() message: string | undefined;

  onClick(){
    console.log("Button has clicked");
    alert(".......")

  }

  constructor() {}
  ngOnInit(): void {
    console.log('page initialized');
  }
}
