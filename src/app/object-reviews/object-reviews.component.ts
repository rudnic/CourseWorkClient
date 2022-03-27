import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddReviewFormComponent } from '../add-review-form/add-review-form.component';
import { ReviewsObjectDto } from '../dto/object_dto/ReviewsObjectDto';

@Component({
  selector: 'app-object-reviews',
  templateUrl: './object-reviews.component.html',
  styleUrls: ['./object-reviews.component.scss']
})
export class ObjectReviewsComponent implements AfterViewInit {

  @Input() reviews: ReviewsObjectDto[]

  displayedColumns: string[] = ['user', 'header', 'text'];
  dataSource: MatTableDataSource<ReviewsObjectDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog) {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddReviewFormComponent);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.reviews);
    this.dataSource.paginator = this.paginator;

    this.dataSource.sortingDataAccessor = (item:any, property:any) => {
      switch(property) {
        case 'object': return item.object.name;
        default: return item[property];
      }
    }
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data, filter) => {
      return data.user.firstname.toLocaleLowerCase().includes(filter) ||
        data.user.lastname.toLocaleLowerCase().includes(filter) ||
        data.header.toLocaleLowerCase().includes(filter) ||
        data.text.toLocaleLowerCase().includes(filter);
    };
    console.log("IM HEREE", this.reviews);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }

}
