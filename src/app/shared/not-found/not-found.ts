import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'nz-demo-result-fof',
  standalone: true,
  imports: [NzButtonModule, NzResultModule],
  template: `
    <div style="margin: 0 auto; width: 75%">
      <nz-result nzStatus="404" nzTitle="404" nzSubTitle="Sorry, the page you visited does not exist.">
        <div nz-result-extra>
          <button nz-button nzType="primary"><a href="/">Back Home</a></button>
        </div>
      </nz-result>
    </div>
  `
})

export class PageNotFound { }