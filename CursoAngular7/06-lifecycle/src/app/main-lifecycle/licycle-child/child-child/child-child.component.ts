import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log("  child child (ngOnInit) " + this.name);
    
  }

  ngOnChanges(): void {
    console.log("  child child (ngOnChanges) " + this.name);
  }

  ngAfterContentInit(): void {
    console.log("  child child (ngAfterContentInit) " + this.name);
    
  }

}
