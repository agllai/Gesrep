import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { ResponceWrapperComponent } from './Component/responce-wrapper/responce-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ResponceWrapperService } from './Srevice/ResponceWrapperService';
import { ClientService } from './Srevice/ClientService';
import { ClientComponent } from './Component/Client/client/client.component';

import {HttpClientModule} from '@angular/common/http'
import { InterceptorModule ,HttpsRequestInterceptor} from './Interceptor.module';
import { DemohelloComponent } from './Component/demohello/demohello.component';
import { TopmenuComponent } from './Component/topmenu/topmenu.component';
import { SideMenuComponent } from './Component/side-menu/side-menu.component';
import { ListeClientComponent } from './Component/Client/liste-client/liste-client.component';
import { CreateArticleComponent } from './Component/Article/create-article/create-article.component';
import { ArticleService } from './Srevice/article-service.service';
import { ListArticleComponent } from './Component/Article/list-article/list-article.component';
import { CreatePaymentsComponent } from './Component/Payment/create-payments/create-payments.component';
import { PaymentService } from './Srevice/payment.service';
import { ListComosantComponent } from './Component/Composant/list-composant/list-composant.component';
import { CreateComposantComponent } from './Component/Composant/create-composant/create-composant.component';
import { CreatePieceComponent } from './Component/Piece/create-piece/create-piece.component';
import { ListPieceComponent } from './Component/Piece/list-piece/list-piece.component';
import { CreatePersonnelComponent } from './Component/Personnel/create-personnel/create-personnel.component';
import { ListPersonnelComponent } from './Component/Personnel/list-personnel/list-personnel.component';
import { ListPaymentComponent } from './Component/Payment/list-payment/list-payment.component';
import { CreateTypePanneComponent } from './Component/Type-Panne/create-type-panne/create-type-panne.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { OrderModule ,OrderPipe } from 'ngx-order-pipe'; //importing the module
import { NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
//import { NgbModule ,NgbTypeaheadModule ,NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { ListOperatorComponent } from './Component/Operator/list-operator/list-operator.component';
import { ComponentAutocomplete } from './autocomplete/componentautocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { autocompletePiPe } from './autocomplete.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ResponceWrapperComponent,
    ClientComponent,
    DemohelloComponent,
    TopmenuComponent,
    SideMenuComponent,
    ListeClientComponent,
    CreateArticleComponent,
    ListArticleComponent,
    CreatePaymentsComponent,
    ListComosantComponent,
    CreateComposantComponent,
    CreatePieceComponent,
    ListPieceComponent,
    CreatePersonnelComponent,
    ListPersonnelComponent,
    ListPaymentComponent,
    CreateTypePanneComponent,
    ListOperatorComponent,
    ComponentAutocomplete,
    autocompletePiPe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    InterceptorModule,
    Ng2SearchPipeModule, //including into imports
    OrderModule, // importing the sorting package here
    NgxPaginationModule,
    MatAutocompleteModule,
    //NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:"rw",
      component:ResponceWrapperComponent
    },
   /* {
      path:"",
      component:AppComponent
    },*/
    {
      path:"CreateClient",
      component:ClientComponent
    },
   { path:"ListeClient/:hidden",
    component:ListeClientComponent
  },
  { path:"ListeClient",
    component:ListeClientComponent
  },
  {
    path:"CreateArticle",
    component:CreateArticleComponent
  },
  {
    path:"listArticle",
  component:ListArticleComponent
  },
  {
    path:"MakePayment",
    component:CreatePaymentsComponent
  },
  {
    path:"ListPayment",
    component:ListPaymentComponent
  },
    {
    path:"CreatePiece",
    component:CreatePieceComponent
  },
  {
    path:"ListPiece",
    component:ListPieceComponent
  },
  {
    path:"listOperator",
    component:ListOperatorComponent
  },
  {
    path:"autocomplete",
    component:ComponentAutocomplete
  }
    ])
    
  ],
  providers: [ResponceWrapperService,ClientService,ArticleService,PaymentService,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
