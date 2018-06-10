import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private accountsService: AccountsService ) { }

  ngOnInit() {
    this.accountsService.getAllAccounts().subscribe( data => console.log(data));
  }

  ngOnDestroy() {
  }

}
