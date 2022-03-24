import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectsListService } from '../services/objects-list.service';

@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.scss']
})
export class ObjectsListComponent implements OnInit {

  objListDto: any[] | undefined

  constructor(private objectsListService: ObjectsListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.objectsListService.getObjects(this.route.snapshot.queryParams['type'])
      .subscribe(response => {
        this.objListDto = response
      })
  }

}
