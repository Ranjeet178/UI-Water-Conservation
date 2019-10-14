import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'profile',
  template: `
  <mat-card>
  <mat-card-header>
  <mat-card-title>
  <h3>Profile </h3>
  </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <mat-list>

  <mat-list-item>email:{{profile?.email}}</mat-list-item>
  <mat-list-item>name:{{profile?.name}}</mat-list-item>
  <mat-list-item>lastname:{{profile?.mob}}</mat-list-item>
  <mat-list-item>flatnumber:{{profile?.flat}}</mat-list-item>
  </mat-list>
</mat-card-content>
</mat-card>

  `
  
})
export class ProfileComponent {
    

    constructor(private apiService: ApiService, private route: ActivatedRoute){}
    profile
ngOnInit(){
    let id = this.route.snapshot.params.id
    this.apiService.getProfile(id).subscribe(data => this.profile =data.json())
        
}
   
}