import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { CityComponent } from './city/city.component';
import { GenderComponent } from './gender/gender.component';
import { SortComponent } from './sort/sort.component';
import { FirstComponent } from './first/first.component';
import { LastComponent } from './last/last.component';

const routes: Routes = [

  {path: "add",component: AddComponent},

  {path: "list",component: ListComponent},

  {path: "find",component: SearchComponent,

    children:[

      {path: "city",component: CityComponent},

      {path: "gender",component: GenderComponent}

    ]

  },

  {path: "sort",component: SortComponent,

    children:[

      {path: "first",component: FirstComponent},

      {path: "last",component: LastComponent}

    ]

  },

  {path: "**",redirectTo:"/list",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
