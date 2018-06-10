import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Account {
  name: string;
}
@Injectable()
export class AccountsService {
  AccountActivated = new Subject();
  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:8000/api/accounts');
  }

  getAccount(name: string): Observable<Account> {
    return this.http.get<Account>('http://localhost:8000/api/accounts/' + name);
  }

  insertAccount(Account: Account): Observable<Account> {
    return this.http.post<Account>('http://localhost:8000/api/accounts/', Account);
  }

  updateAccount(Account: Account): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/accounts/' + Account.name, Account);
  }

  deleteAccount(name: string) {
    return this.http.delete('http://localhost:8000/api/accounts/' + name);
  }
}
