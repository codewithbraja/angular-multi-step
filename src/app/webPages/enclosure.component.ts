import { Component , OnInit} from '@angular/core';
import { Router }  from '@angular/router';
 
import { EnclosureInfo }   from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import {NavBarCSSService} from '../data/NavBarCss.Service';

@Component ({
    selector: 'msw-enclosure'
    ,templateUrl: '../webPages/enclosure.component.html'
})
 
export class EnclosureComponent implements OnInit  {
    title = 'Enclosure Detail';
    enclosureInfo: EnclosureInfo;
    form: any;
    constructor(private router: Router, private formDataService: FormDataService,private navbarcssservice: NavBarCSSService) {}
    ngOnInit() {
        this.navbarcssservice.setActiveComponentValue('enclosure');
       this.enclosureInfo = this.formDataService.getEnclosureInfo();
        console.log('enclosure info feature loaded!');
    }
    save(form: any): boolean {
       if (!form.valid) {
            return false;
       }
        
        this.formDataService.setEnclosureInfo(this.enclosureInfo);
        return true;
    }
    
    goToPrevious(form: any) {
       if (this.save(form)) {
            this.changeNavBarCompleteStyle();
            // Navigate to the personal page
            this.router.navigate(['/previousStudy']);
        }
    }

    goToNext(form: any) {
       if (this.save(form)) {
            this.changeNavBarCompleteStyle()
            // Navigate to the address page
            this.router.navigate(['/confirmDetails']);
        }
    }
    changeNavBarCompleteStyle()
    {
        this.navbarcssservice.setActiveComponentValue('');
        this.navbarcssservice.setCompletedComponentValue('student,parent,previousStudy,enclosure');
    }
    }