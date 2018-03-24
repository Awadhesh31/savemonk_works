import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';
import { SlidenavbarComponent } from './component/slidenavbar/slidenavbar.component';
import { SecondcontentComponent } from './component/secondcontent/secondcontent.component';
import { SlidecategoriesComponent } from './component/slidecategories/slidecategories.component';

const appRouter: Routes = [
  {path: '', component: ContentComponent},
  {path: 'awad', component: SecondcontentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SlidenavbarComponent,
    SecondcontentComponent,
    SlidecategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
