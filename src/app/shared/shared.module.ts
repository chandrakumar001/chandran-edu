import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { SharedRoutingModule } from '@app/shared/shared-routing.module';
//header
import { HeaderComponent } from '@app/shared/header/header.component';
import { RightNavComponent } from '@app/shared/header/right-nav/right-nav.component';
import { CompanyLogoComponent } from '@app/shared/header/company-logo/company-logo.component';

// footer 
import { FooterComponent } from '@app/shared/footer/footer.component';
import { SocialLinksComponent } from '@app/shared/footer/social-links/social-links.component';
import { CompanyProfilesComponent } from '@app/shared/footer/company-profiles/company-profiles.component';
import { CopyrightComponent } from '@app/shared/footer/copyright/copyright.component';
import { LangComponent } from './footer/lang/lang.component';
import { DynamicMenuComponent } from './Component/dynamic-menu/dynamic-menu.component';
import { CustomMaterialModule } from '@app/custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnnouncementComponent } from './header/announcement/announcement.component';



@NgModule({
  declarations: [
    //header
    HeaderComponent,
    RightNavComponent,
    CompanyLogoComponent,    
    //footer
    FooterComponent,
    SocialLinksComponent,
    CompanyProfilesComponent,
    CopyrightComponent,
    LangComponent,
    DynamicMenuComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CustomMaterialModule,
    // sepecif the flexlayout
    FlexLayoutModule
  ],
  exports:[
    AnnouncementComponent,
    DynamicMenuComponent,
    //header
    HeaderComponent,
    RightNavComponent,
    CompanyLogoComponent,  
    //footer
    FooterComponent,
    SocialLinksComponent,
    CompanyProfilesComponent,
    CopyrightComponent
  ]
})
export class SharedModule { }
