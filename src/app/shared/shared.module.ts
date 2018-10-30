import { NgModule,ErrorHandler} from '@angular/core';

import { GlobalErrorHandlerService } from '../shared/error/service/global-error-handler.service';
import { ErrorComponent } from '../shared/error/error.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PageNotFoundComponent } from '../shared/pageNotFound/pageNotFound.component';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    declarations:[
        HeaderComponent,
        ErrorComponent,
        PageNotFoundComponent,
        SearchPipe,
        SpinnerComponent
    ],
    imports:[AppRoutingModule],
    exports:[AppRoutingModule,HeaderComponent,SpinnerComponent,SearchPipe],
    providers:[{provide: ErrorHandler, useClass: GlobalErrorHandlerService}]
})

export class SharedModule {

}