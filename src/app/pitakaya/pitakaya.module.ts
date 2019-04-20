import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PitakayaPage } from './pitakaya.page';

const routes: Routes = [
  {
    path: ':selectedPitakaya',
    component: PitakayaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PitakayaPage]
})
export class PitakayaPageModule {}
