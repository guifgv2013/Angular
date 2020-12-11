import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http' 
import { PhotoComponent } from './ap-photos/ap-photo/ap-photo.component';
import { PhotosModule } from './ap-photos/ap-photos';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
