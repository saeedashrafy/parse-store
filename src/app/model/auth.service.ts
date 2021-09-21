import {Injectable} from '@angular/core';
// @ts-ignore
import {Parse} from "parse";

@Injectable()
export class AuthService {

  constructor() {
  }

  authenticate(loginCredit: any, success: () => void, failure: () => void) {

    Parse.User.logIn(
      loginCredit.userName,
      loginCredit.password,
      {usePost: true})
      .then((user: Parse) => {
        success();
      }, (error: any) => {
        failure();
      })

  }

  get authenticated(): boolean {
    const currentUser = Parse.User.current();
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  }
}
