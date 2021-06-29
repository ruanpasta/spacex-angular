import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules, paramsInheritanceStrategy: 'always', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
