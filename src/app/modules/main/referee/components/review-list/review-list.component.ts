import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  validateForm: FormGroup;

  pageSize: number = 10;

  pageIndex: number = 1;

  total: number = 30;

  reviewList: any = [
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000},
    {id:1, username: 'klx', imgUrl: '', time: 1580808088000}
  ]

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null]
    });
  }

}
