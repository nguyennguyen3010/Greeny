import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';


@Component({
  selector: 'app-upload-music',
  templateUrl: './upload-music.component.html',
  styleUrls: ['./upload-music.component.scss']
})
export class UploadMusicComponent implements OnInit {
  isHovering: boolean;
  files: File[] = [];
  @Output() musicFiles = new EventEmitter<File[]>();
  constructor( public cloudService: CloudService) { }

  ngOnInit(): void {
  }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      this.musicFiles.emit(this.files);
    }
  }

}
