import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  grados(g) {

    if (typeof (Storage) !== "undefined") {
      // Store
      localStorage.setItem("metrica", g);
    } else {
      console.log("Sorry, your browser does not support Web Storage...");
    }


  }
}
