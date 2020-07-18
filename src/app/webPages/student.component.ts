import { Component , OnInit} from '@angular/core';
import { Router }  from '@angular/router';

import { StudentInfo }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

import {NavBarCSSService} from '../data/NavBarCss.Service';


@Component ({
    selector: 'msw-student'
    ,templateUrl: '../webPages/student.component.html'
})
 
export class StudentComponent implements OnInit  {
    title = 'Student Detail';    
    prevNextclickCounterflag:any=true;
    studentInfo: StudentInfo;
    form: any;
    constructor(private router: Router, private formDataService: FormDataService,private navbarcssservice: NavBarCSSService) {
    }

    ngOnInit() {
        //sets the navigation as active
        this.navbarcssservice.setActiveComponentValue('student');
        this.studentInfo = this.formDataService.getStudentInfo();
        console.log('student info feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            this.prevNextclickCounterflag=false; 
            return false;
        } 
        this.prevNextclickCounterflag=true; 
        this.formDataService.setStudentInfo(this.studentInfo);
        return true;
    }

    goToNext(form: any) {
        //it will hide error message if false,will be true if next/previous button clicked
             if (this.save(form)) {
            this.changeNavBarCompleteStyle();
            // Navigate to the work page
            this.router.navigate(['/parent']);
        }
    }
    changeNavBarCompleteStyle(){
        this.navbarcssservice.setActiveComponentValue('');
        this.navbarcssservice.setCompletedComponentValue('student');
    }
  
}