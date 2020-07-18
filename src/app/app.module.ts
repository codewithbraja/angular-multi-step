import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent }    from './webPages/navbar.component';
 
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


/* Feature Components */
import { StudentComponent }  from './webPages/student.component';
import { ParentComponent }      from './webPages/parent.component';
import { PreviousStudyComponent }   from './webPages/previousStudy.component';
import { EnclosureComponent }    from './webPages/enclosure.component';
import { ConfirmDetails }    from './webPages/confirmDetails.component';
import { PaymentsComponent }    from './webPages/payments.component';
/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { NgbdDatepickerAdapter } from './SharedComponent/datepicker-adapter';
import {NgbdDatepickerCustomday}  from './SharedComponent/datepicker-customday'
 */

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, StudentComponent, ParentComponent, PreviousStudyComponent, 
    EnclosureComponent,ConfirmDetails,PaymentsComponent
    // ,NgbdDatepickerCustomday
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    //,NgbModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
