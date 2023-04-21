import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit{

  id: string
  user!: User
  myDate = new Date();
  
  constructor(private userSvc: UserService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser(this.id);
  }

  getUser(id: string) {
    this.userSvc.getUser(id).subscribe(data => {
      this.user = data;
      console.log(data)
    })
  }

}
