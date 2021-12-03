import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageUnderBuildComponent } from './page-under-build/page-under-build.component'
import { AwardsComponent } from './awards/awards.component'
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'projects', component: PageUnderBuildComponent },
  { path: 'mentor', component: PageUnderBuildComponent },
  { path: 'courses', component: PageUnderBuildComponent },
  { path: 'leader', component: PageUnderBuildComponent },
  { path: 'awards', component: AwardsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
