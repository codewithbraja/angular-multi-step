import { Component , OnInit} from '@angular/core';
import { Router }  from '@angular/router';

import { PreviousStudyInfo }   from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import {NavBarCSSService} from '../data/NavBarCss.Service';

@Component ({
    selector: 'msw-previousStudy'
    ,templateUrl: '../webPages/previousStudy.component.html'
})
 
export class PreviousStudyComponent implements OnInit  {
    title = 'Previous Study Detail';
    previousStudyInfo: PreviousStudyInfo;
    form: any;
    constructor(private router: Router, private formDataService: FormDataService,private navbarcssservice: NavBarCSSService) {}
    ngOnInit() {
        this.navbarcssservice.setActiveComponentValue('previousStudy');
        this.previousStudyInfo = this.formDataService.getPreviousStudyInfo()
        console.log('student info feature loaded!');
    }
    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setPreviousStudyInfo(this.previousStudyInfo);
        return true;
    }
    goToPrevious(form: any) {
        if (this.save(form)) {
            this.changeNavBarCompleteStyle();
            // Navigate to the personal page
            this.router.navigate(['/parent']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            this.changeNavBarCompleteStyle()
            // Navigate to the address page
            this.router.navigate(['/enclosure']);
        }
    }
    changeNavBarCompleteStyle()
    {
        this.navbarcssservice.setActiveComponentValue('');
        this.navbarcssservice.setCompletedComponentValue('student,parent,previousStudy,enclosure');
    }
    }