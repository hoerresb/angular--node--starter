import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-Account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private AccountsService: AccountsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate() {
    this.AccountsService.AccountActivated.next(this.id);
  }
}
