import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RestockComponent } from './components/restock/restock.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';


const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
      path: 'restock',
      component: RestockComponent,
  },
  {
      path: 'withdraw',
      component: WithdrawComponent,
  },
  {
      path: '',
      component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
