import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//header-component
import { HeaderComponent } from '@app/shared/header/header.component';
import { RightNavComponent } from '@app/shared/header/right-nav/right-nav.component';
import { CompanyLogoComponent } from '@app/shared/header/company-logo/company-logo.component';
import { DynamicMenuComponent } from '@app/shared/Component/dynamic-menu/dynamic-menu.component';
import { AnnouncementComponent } from '@app/shared/header/announcement/announcement.component';
// footer-component
import { FooterComponent } from '@app/shared/footer/footer.component';
import { SocialLinksComponent } from '@app/shared/footer/social-links/social-links.component';
import { CompanyProfilesComponent } from '@app/shared/footer/company-profiles/company-profiles.component';
import { CopyrightComponent } from '@app/shared/footer/copyright/copyright.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

export const SHARED_COMPONENTS = [
  //header
  HeaderComponent,
  RightNavComponent,
  CompanyLogoComponent,
  //footer
  FooterComponent,
  SocialLinksComponent,
  CompanyProfilesComponent,
  CopyrightComponent,
  DynamicMenuComponent,
  AnnouncementComponent
]
