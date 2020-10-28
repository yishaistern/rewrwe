import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/model-interface';
import { selectusers } from 'src/app/store/main-reducer';

@Component({
  selector: 'app-borad',
  templateUrl: './borad.component.html',
  styleUrls: ['./borad.component.scss']
})
export class BoradComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private route: Router, private store: Store) { }

  ngOnInit(): void {
    this.users  = this.store.select(selectusers);
  }

  start(): void {
    this.route.navigate(['/game']);
  }

  newUser(): void {
    this.route.navigate(['/login']);
  }
}
