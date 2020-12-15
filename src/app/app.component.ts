import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from './ap-photos/ap-photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  photos: any[] = [];
  // photos=[
    // {
    //   url:"https://optclean.com.br/wp-content/uploads/2018/04/imagem-fundo-transparente-photoshop-1280x720.jpg",
    //   description:"Mão"
    // },
    // {
    //   url:"https://img1.gratispng.com/20171220/tyq/lion-png-5a3aa27e1e5196.5533236115137921261242.jpg",
    //   description:"Leão"
    // },
    // {
    //   url:"https://img1.gratispng.com/20171220/tyq/lion-png-5a3aa27e1e5196.5533236115137921261242.jpg",
    //   description:"Leão"
    // }
  // ];
  constructor(private photoservice: PhotoService)
  {
    this.photoservice
    .listFromUser('flavio')
    .subscribe(photos => {
      console.log(photos[0].userId);
      this.photos = photos;
    })
      // const observable = 
      //         http.get<Object[]>('http://localhost:3000/flavio/photos')
      //             .subscribe(photos => this.photos = photos);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
