import { Component, OnInit} from '@angular/core';
import { Router }  from '@angular/router';

import { FormDataService }     from '../data/formData.service';
import {NavBarCSSService} from '../data/NavBarCss.Service';
@Component ({
    selector: 'msw-confirmDetails'
    ,templateUrl: '../webPages/confirmDetails.component.html'
})
 
export class ConfirmDetails implements OnInit  {
    title = 'Confirm Detail';
   // enclosureInfo: EnclosureInfo;
    form: any;
    formData;
    constructor(private router: Router, private formDataService: FormDataService,private navbarcssservice: NavBarCSSService) {}
    ngOnInit() {
        this.navbarcssservice.setActiveComponentValue('confirmDetails');
        this.formData = this.formDataService.getFormData();
        console.log('confirm detail info feature loaded!');
    }
    goToPrevious(form: any) {
       
             this.changeNavBarCompleteStyle();
             // Navigate to the personal page
             this.router.navigate(['/enclosure']);
     }
    goToNext() {
        //it will hide error message if false,will be true if next/previous button clicked
            
            this.changeNavBarCompleteStyle();
            // Navigate to the work page
            this.router.navigate(['/payment']);
    }
    changeNavBarCompleteStyle(){
        this.navbarcssservice.setActiveComponentValue('');
        this.navbarcssservice.setCompletedComponentValue('student,parent,previousStudy,enclosure,confirmDetails');
    }

}