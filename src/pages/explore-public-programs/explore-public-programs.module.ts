import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorePublicProgramsPage } from './explore-public-programs';

@NgModule({
  declarations: [
    ExplorePublicProgramsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorePublicProgramsPage),
  ],
  exports: [
    ExplorePublicProgramsPage
  ]
})
export class ExplorePublicProgramsPageModule {}
