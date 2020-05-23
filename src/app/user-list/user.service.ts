import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable()
export class UserService {
  users: object;
  particularUser: object;
  userFetcher = new Subject<object>();
  particularFetcher = new Subject<object>();

  constructor(private http: HttpClient) {}

  fetch() {
    this.http.get<object>('https://jsonplaceholder.typicode.com/users ').subscribe((res) => {
      this.users = res;
      this.userFetcher.next(this.users);
      // console.log(res)
      // console.log(this.users['0']);
      // console.log(this.users['1']);
    });
  }

  getUser() {
    return this.particularUser;
  }

  fetchParticular(id: number) {
    
    this.http.get<object>(`https://jsonplaceholder.typicode.com/posts?id=${id}`).subscribe((res) => {
      this.particularUser = res;
      this.particularFetcher.next(this.particularUser);
      // console.log(this.particularUser);
    });
  }
}
