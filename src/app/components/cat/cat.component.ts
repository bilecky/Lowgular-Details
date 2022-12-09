import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatModel } from '../../models/cat.model';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatComponent {
  readonly randomCat$: Observable<CatModel> = this._catService.getOne();

  constructor(private _catService: CatService) {
  }
}
