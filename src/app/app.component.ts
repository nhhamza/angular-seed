import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grdf-biomethane';
  public activeLang = 'fr';
  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://picsum.photos/1200/1301';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }
}
