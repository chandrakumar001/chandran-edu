import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// routing
import { AppRoutingModule, MAIN_COMPONENTS } from '@app/app-routing.module';
// component
import { AppComponent } from '@app/app.component';
//custom module
import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from '@app/custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MAIN_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
