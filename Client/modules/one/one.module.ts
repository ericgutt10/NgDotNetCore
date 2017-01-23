import { NgModule } from '@angular/core';

import { OneComponent } from './one.component';
import { routing } from './one.routes';

import { SharedModule }  from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        OneComponent
    ]
})
export class OneModule { }
