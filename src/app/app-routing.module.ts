import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageUnderBuildComponent } from './page-under-build/page-under-build.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { MentorComponent } from './mentor/mentor.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'courses', component: PageUnderBuildComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'awards', component: AchievementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
