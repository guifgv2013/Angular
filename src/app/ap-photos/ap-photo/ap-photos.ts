import { NgModule } from "@angular/core";
import { PhotoComponent } from "./ap-photo.component";

@NgModule({
    declarations: [PhotoComponent],
    exports:[PhotoComponent]
})

export class PhotosModule{}