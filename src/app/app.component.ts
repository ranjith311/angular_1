import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  message = "This msg is from app component to its child content component"
  forChild1="The data is for the child 1"
  forChild2="The data is for the child 2"
  constructor(private router: Router) {}

  navigateToChild(childId: number) {
    alert(childId)
    this.router.navigate(['child', childId]);
  }
}
