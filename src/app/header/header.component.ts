import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToStudent() {
    this.router.navigate(['student']);
  }
  navigateToStaff() {
    this.router.navigate(['staff']);
  }
  navigateToWilmu() {
    this.router.navigate(['wilmu']);
  }

  navigateToUniversity() {
    this.router.navigate(['university']);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToAccount() {
    this.router.navigate(['account']);
  }
  navigateToNation() {
    this.router.navigate(['nation']);
  }

  navigateToShopping() {
    this.router.navigate(['shopping']);
  }

  navigateToCompRel() {
    this.router.navigate(['comp-rel']);
  }
  navigateToPopUp() {
    this.router.navigate(['pop-up']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  getStudentDetails() {
    console.log('students called');
    // alert("students");
  }

  getStaffDetails() {
    console.log('staff called');
    // alert("staff");
  }

  getWilmuDetails() {
    console.log('wilmu called');
    // alert("wilmu");
  }
}
