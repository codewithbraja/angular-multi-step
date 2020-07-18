import { Component, OnInit} from '@angular/core';
import { Router }  from '@angular/router';
import { PaymentInfo }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import {NavBarCSSService} from '../data/NavBarCss.Service';
 
@Component ({
    selector: 'msw-payments'
    ,templateUrl: '../webPages/payments.component.html'
})
 
export class PaymentsComponent implements OnInit  {
    title = 'Payment Detail';
   // enclosureInfo: EnclosureInfo;
    form: any;
    formData;
    paymentInfo:PaymentInfo;
    constructor(private router: Router, private formDataService: FormDataService,private navbarcssservice: NavBarCSSService) {}
    ngOnInit() {
        this.navbarcssservice.setActiveComponentValue('payment');
        this.formData = this.formDataService.getFormData();
        this.paymentInfo = this.formDataService.getPaymentInfo();
        console.log('payment info feature loaded!');
    }
    FinalSubmit() {
        //call the service
        //reset all form data
        // Navigate to the student page
            this.router.navigate(['/student']);
    }

}