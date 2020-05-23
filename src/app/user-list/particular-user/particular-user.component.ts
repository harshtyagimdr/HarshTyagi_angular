import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-particular-user',
  templateUrl: './particular-user.component.html',
  styleUrls: ['./particular-user.component.css']
})
export class ParticularUserComponent implements OnInit {
  @Input() particularUser: object;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
