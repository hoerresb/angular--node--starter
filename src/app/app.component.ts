import { Component, OnInit } from '@angular/core';

import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Account1Activated = false;
  Account2Activated = false;

  constructor(private AccountsService: AccountsService) {}

  ngOnInit() {
    this.AccountsService.AccountActivated.subscribe(
      (id: number) => {
        console.log('id ', id);
        if (id === 1) {
          this.Account1Activated = true;
        } else if (id === 2) {
          this.Account2Activated = true;
        }
      }
    );
  }
}
