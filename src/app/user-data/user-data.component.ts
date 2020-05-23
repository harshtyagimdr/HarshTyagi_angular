import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../user-list/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit, OnDestroy {
  detailedUser: object;
  id: number;
  title:String;
  body:String;
loadData(){
  this.route.params.subscribe((id: Params) => {
    this.id = +id['id'];
    console.log(this.id);
    this.userService.fetchParticular(this.id);
    this.userService.particularFetcher.subscribe((data: object) => {
      this.detailedUser = data;
      this.title=this.detailedUser[0].title;
      this.body=this.detailedUser[0].body;
      // console.log(this.detailedUser[0]);

    });
  });
}
  constructor(private route: ActivatedRoute, private userService: UserService) {
    setTimeout(()=>{
      this.loadData();
    },200)
   }

  ngOnInit() {
   
  
   
  }

  ngOnDestroy() {
    this.userService.particularFetcher.unsubscribe();
  }

}
