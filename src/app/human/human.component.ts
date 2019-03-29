import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  wishStatus = "Wishlist"
  wishlisted = false;
  className = "fa fa-heart-o fa-2x";
  
  constructor() { }

  ngOnInit() {
  }

  onWishIconClicked() {
    if(!this.wishlisted){
      this.wishlisted = true;
      this.wishStatus = "Wishlisted";
      this.className = "fa fa-heart fa-2x";
    }else{
      this.wishlisted = false;
    this.wishStatus = "Wishlist";
    this.className = "fa fa-heart-o fa-2x";
    }
  }

}
