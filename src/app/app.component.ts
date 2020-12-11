import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos=[
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
  ];
  constructor(http:HttpClient)
  {
    console.log(http);
  }
}
