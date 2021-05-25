import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { SharedRoutingModule, SHARED_COMPONENTS } from '@app/shared/shared-routing.module';
// module
import { CustomMaterialModule } from '@app/custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CustomMaterialModule,
    // sepecif the flexlayout
    FlexLayoutModule
  ],
  exports: [
    SHARED_COMPONENTS
  ]
})
export class SharedModule { }