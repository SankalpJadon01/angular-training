import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  constructor(private router : Router, private route: ActivatedRoute){}
  byFirst(){
    this.router.navigate(["first"],{relativeTo:this.route});
  }
  byLast(){
    this.router.navigate(["last"],{relativeTo:this.route});
  }

}
