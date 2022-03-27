import { Component, OnInit, ViewChild } from '@angular/core';
import { UcWidgetComponent } from 'ngx-uploadcare-widget';
import { AddUserPhotoService } from '../services/add-user-photo.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild(UcWidgetComponent)
  private widgetComponent: UcWidgetComponent;


  constructor(private addPhotoService: AddUserPhotoService) { }

  ngOnInit(): void {
  }

  uploadomplete(info: any) {
    console.log(info.count, info.uuid);
    this.addPhotoService.addPhotos(info.count, info.uuid);
  }

}
