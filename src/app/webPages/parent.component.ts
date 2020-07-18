import { Component , OnInit} from '@angular/core';
import { Router }  from '@angular/router';

import { FormDataService }     from '../data/formData.service';
import { ParentInfo } from '../data/formData.model';
import {NavBarCSSService} from '../data/NavBarCss.Service';
@Component ({
    selector: 'msw-parent'
    ,templateUrl: '../webPages/parent.component.html'
})
 
export class ParentComponent implements OnInit {

    title = 'Parent Detail';
    prevNextclickCounterflag:any=true;
    parentInfo: ParentInfo;
    form: any;
    constructor(private router: Router, private formDataService: FormDataService,private navbarcssservice: NavBarCSSService) {
    }

    ngOnInit() {
        this.navbarcssservice.setActiveComponentValue('parent');
        this.parentInfo = this.formDataService.getParentInfo();
        console.log('student info feature loaded!');
    }
    save(form: any): boolean {
        if (!form.valid) {
            this.prevNextclickCounterflag=false; 
            return false;
        }
        this.prevNextclickCounterflag=true; 
        this.formDataService.setParentInfo(this.parentInfo);
        return true;
    }
    goToPrevious(form: any) {
        if (this.save(form)) {
            this.changeNavBarCompleteStyle();
            // Navigate to the personal page
            this.router.navigate(['/student']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            this.changeNavBarCompleteStyle()
            // Navigate to the address page
            this.router.navigate(['/previousStudy']);
        }
    }
    changeNavBarCompleteStyle()
    {
        this.navbarcssservice.setActiveComponentValue('');
        this.navbarcssservice.setCompletedComponentValue('student,parent');
    }
}