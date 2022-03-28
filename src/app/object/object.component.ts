import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectService } from '../services/object.service';
import { ObjectDto } from 'src/app/dto/object_dto/ObjectDto'
import { RateObjectService } from '../services/rate-object.service';


@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  object: ObjectDto;
  objectRating: number;
  userRating: number;
  currentRate: number = 0;
  selectedRate = 0;

  constructor(private objectService: ObjectService, private route: ActivatedRoute,
    private rateObjectService: RateObjectService) { }

  ngOnInit(): void {
    this.objectService.getObject(this.route.snapshot.params['id'])
      .subscribe(response => {
        this.object = response;
        this.objectRating = this.object.rating;
        
        this.object.ratings.forEach(element => {
          if (element.user.id == Number(sessionStorage.getItem("id"))) {
            this.currentRate = element.rating;
            this.selectedRate = this.currentRate;
          }
        })

      });
  }


  onClickRating() {
    this.rateObjectService.changeRating(Number(this.object.id), this.currentRate).subscribe(
      response => {
        this.selectedRate = this.currentRate;
        this.changeObjectRating();
      }
    )
    
  }

  changeObjectRating() {
    this.rateObjectService.getObjectRating(Number(this.object.id)).subscribe(
      response => {
        this.objectRating = response;
      }
    )
  }
  
}
