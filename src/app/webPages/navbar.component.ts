import { Component ,OnInit} from '@angular/core';
 import {NavBarCSSService} from '../data/NavBarCss.Service';
@Component ({
    selector: 'msw-navbar',
    templateUrl:'../webPages/navbar.component.html',
    styleUrls: ['../webPages/navbar.component.css']
})
 
export class NavbarComponent implements OnInit {
    public ActiveComponentName: string;
    public CompletedComponentNames: string;
    constructor(private navbarcssservice: NavBarCSSService) {
    }
  
    ngOnInit() {
      this.navbarcssservice.getActiveComponentValue().subscribe((value) => {
        this.ActiveComponentName = value;
      });
      this.navbarcssservice.getCompletedComponentValue().subscribe((value) => {
        this.CompletedComponentNames = value;
      });
    }
  
  }