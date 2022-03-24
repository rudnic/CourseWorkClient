import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddReviewFormComponent } from '../add-review-form/add-review-form.component';
import { ReviewsProfileDto } from '../dto/profile_dto/ReviewsProfileDto';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.scss']
})
export class ProfileReviewsComponent implements AfterViewInit {

  @Input() reviews: ReviewsProfileDto[]

  displayedColumns: string[] = ['object', 'header', 'text'];
  dataSource: MatTableDataSource<ReviewsProfileDto>;

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
      return data.object.name.toLocaleLowerCase().includes(filter) ||
        data.header.toLocaleLowerCase().includes(filter) ||
        data.text.toLocaleLowerCase().includes(filter);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
   

  }
}
