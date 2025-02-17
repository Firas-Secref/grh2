import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CandidatesComponent} from "./candidates/candidates.component";

const routes: Routes = [
  {
    path: '',
    component: CandidatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateFeatureRoutingModule { }
