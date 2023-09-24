import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CityComponent } from './city/city.component';
import { FirstComponent } from './first/first.component';
import { GenderComponent } from './gender/gender.component';
import { LastComponent } from './last/last.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CityComponent,
    FirstComponent,
    GenderComponent,
    LastComponent,
    ListComponent,
    SearchComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
