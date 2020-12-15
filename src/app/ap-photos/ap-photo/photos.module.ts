import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./ap-photo.component";


@NgModule({
    declarations:[PhotoComponent],
    exports: [PhotoComponent],
    imports:[HttpClientModule]

})

export class PhotoModule{}