import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
  destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    //this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    //interval(1000).pipe(takeUntil(this.destroy$), tap(console.log)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
