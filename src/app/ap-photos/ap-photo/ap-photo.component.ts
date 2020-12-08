import { Component, Input } from "@angular/core";
@Component({
    selector: 'ap-photo',
    templateUrl: './ap-photo.component.html'
})
export class PhotoComponent{
    @Input() description = '';
    @Input() url = '';
}