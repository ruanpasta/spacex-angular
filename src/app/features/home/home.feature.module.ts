import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeFeatureRoutingModule } from "./home.feature.routing.module";

@NgModule({
  imports: [SharedModule, HomeFeatureRoutingModule]
})
export class HomeModule {}