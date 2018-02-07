import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  /*styles:[`
    .white-text{
        color: white;
    }
  `],*/
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    showSecret = false;
    log = [];

    onToggleDetails(){
        this.showSecret = !this.showSecret;
        //var date = new Date();
        this.log.push(this.log.length+1);
        //this.log.push(date);
    }

    //my solution
    /*showParagraph = false;
    buttonClicks = [];

    onToggleParagraph(){
    this.showParagraph= this.showParagraph===true?false:true;
    this.buttonClicks.push("button click # " + (this.buttonClicks.length+1))
    }*/

  constructor() { }

  ngOnInit() {
  }



}
