import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectService } from '../services/object.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  object: any;
  param: string;

  constructor(private objectService: ObjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.objectService.getObject(this.route.snapshot.params['id'])
      .subscribe(response => {
        this.object = response
        console.log(response);
      })
  }
}
