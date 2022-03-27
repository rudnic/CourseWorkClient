import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ObjectsListService } from '../services/objects-list.service';
import { AddReviewService } from '../services/add-review.service';
import { ObjectListDto } from '../dto/ObjectsListDto';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss']
})

export class AddReviewFormComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredObjects: Observable<ObjectListDto[]>;

  review: any = {
    obj: null,
    title: null,
    comment: null
  };

  listObjTypes = ['Book', 'Film', 'Game'];
  objType: string;
  

  listObjects: any[];

  constructor(private objectsListService: ObjectsListService, 
      private addReviewService: AddReviewService, public dialog: MatDialog) {
    this.filteredObjects = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(obj => (obj ? this._filterObjects(obj) : this.listObjects.slice())),
    );
  }

  
  ngOnInit(): void {
    
  }

  filter() {
    this.filteredObjects = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(obj => (obj ? this._filterObjects(obj) : this.listObjects.slice())),
    );
  }

  private _filterObjects(value: string): Object[] {
    const filterValue = value.toLowerCase();

    return this.listObjects.filter(obj => obj.name.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    const { obj, title, comment } = this.review;
    this.addReviewService.addReview(obj, this.objType, title, comment);
    console.log(obj, this.objType, title, comment);

  }

  displayFunction(obj: ObjectListDto): string {
    return obj.name;
  }

  async onItemChange(data: any) {
    this.objectsListService.getObjects(this.objType.toLowerCase())
      .subscribe(response => {
        this.listObjects = response;
        this.filter();
      })

  }

}
