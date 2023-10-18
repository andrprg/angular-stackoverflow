import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './ui/layout/components/header/header.component';
import { MainComponent } from './ui/layout/components/main/main.component';
import { FooterComponent } from './ui/layout/components/footer/footer.component';
import { HeaderInterceptor } from './data/interceptors/header.interceptor';
import { ApiPrefixInterceptor } from './data/interceptors/api-prefix.interceptor';
import { MessagesComponent } from './presentation/common/messages/messages.component';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './presentation/common/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsideComponent } from './ui/layout/components/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MessagesComponent,
    LoadingComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
