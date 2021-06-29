import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.feature.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RouterModule]
})
export class FeaturesModule {}
