import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductsComponent } from '../products.component';
import { ProductsPipe } from '../products.pipe';
import { RatingComponent } from '../rating/rating.component';
import { DetailsComponent } from '../details/details.component';
import { CreateComponent } from '../create/create.component';
import { AuthGuard } from '../../auth/auth.guard';
import { AuthinterceptorService } from '../../auth/authinterceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:"", component: ProductsComponent, canActivate:[AuthGuard],
        children: [
          {path:"create", component:CreateComponent}
        ]},
      {path:"/:pCode", component: DetailsComponent}
    ])
  ],
  declarations: [
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    DetailsComponent,
    CreateComponent,
  ],

  providers :[{
    provide:HTTP_INTERCEPTORS,
    useClass : AuthinterceptorService,
    multi : true
  }]
})
export class ProductsModule { }
