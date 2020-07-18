import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent }  from './webPages/student.component';
import { ParentComponent }      from './webPages/parent.component';
import { PreviousStudyComponent }   from './webPages/previousStudy.component';
import { EnclosureComponent }    from './webPages/enclosure.component';
import { ConfirmDetails }    from './webPages/confirmDetails.component';
import { PaymentsComponent }    from './webPages/payments.component';

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';

const appRoutes: Routes = [
   // 1st Route
   { path: 'student',  component: StudentComponent , canActivate: [WorkflowGuard]},
   // 2nd Route
   { path: 'parent',  component: ParentComponent , canActivate: [WorkflowGuard]},
   // 3rd Route
   { path: 'previousStudy',  component: PreviousStudyComponent , canActivate: [WorkflowGuard]},
   // 4th Route
   { path: 'enclosure',  component: EnclosureComponent , canActivate: [WorkflowGuard]},
    // 5th Route
    { path: 'confirmDetails',  component: ConfirmDetails , canActivate: [WorkflowGuard]},
     // 6th Route
   { path: 'payment',  component: PaymentsComponent , canActivate: [WorkflowGuard]},
   // 7th Route
   { path: '',   redirectTo: '/StudentComponent', pathMatch: 'full' },
   // 8th Route
   { path: '**', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})
export class AppRoutingModule { }
