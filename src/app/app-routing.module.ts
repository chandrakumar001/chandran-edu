import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import {
  HomeComponent,
  SkillsComponent,
  ProjectsComponent,
  LiveAppsComponent,
  BlogsComponent,
  ContactMeComponent
} from '@app/components/index';

const routes: Routes = [
  //the empty path will be redirected to the home component
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'live-apps', component: LiveAppsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  //this path redirects to the home component
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MAIN_COMPONENTS = [
  HomeComponent,
  SkillsComponent,
  ProjectsComponent,
  LiveAppsComponent,
  BlogsComponent,
  ContactMeComponent
];
