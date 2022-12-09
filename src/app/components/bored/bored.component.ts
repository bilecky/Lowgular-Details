import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BoredModel } from '../../models/bored.model';
import { BoredService } from '../../services/bored.service';


@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredComponent {
  readonly data$: Observable<BoredModel> = this._activatedRoute.params.pipe(switchMap(data => this._boredService.getWork(data['id'])));




  constructor(private _activatedRoute: ActivatedRoute, private _boredService: BoredService) {
  }
}
