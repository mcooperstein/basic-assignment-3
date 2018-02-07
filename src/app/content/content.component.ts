import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles:[`
    .white-text{
        color: white;
    }
  `],
  //styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    showParagraph = false;
    buttonClicks = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleParagraph(){
    /*if(this.showParagraph==true){
        this.showParagraph=false;
    } else {
        this.showParagraph=true;
    }*/
    this.showParagraph= this.showParagraph===true?false:true;
    this.buttonClicks.push("button click # " + (this.buttonClicks.length+1))
  }

}
