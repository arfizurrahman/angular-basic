import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  // styleUrls: ['./assignment3.component.css']
  styles: [`
    .white-text {
      color: #fff;
    }
  `]
})
export class Assignment3Component implements OnInit {
  
  showSecretMessage = false;
  log = [];
  constructor() { }

  ngOnInit() {
  }
  
  onToggleDetails() {
    this.showSecretMessage = !this.showSecretMessage;
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
}
