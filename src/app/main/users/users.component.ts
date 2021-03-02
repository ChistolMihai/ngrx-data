import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from '../../store/actions/user.actions';
import { getUsers } from '../../store/selectors/user.selectors';
import { AppState } from '../../store/_config';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]>;

  readonly userFields = ['id', 'name', 'username', 'email'];

  constructor(private readonly store$: Store<AppState>) {}

  ngOnInit() {
    this.store$.dispatch(UserActions.getAll());
    this.users$ = this.store$.pipe(select(getUsers));
  }
}
