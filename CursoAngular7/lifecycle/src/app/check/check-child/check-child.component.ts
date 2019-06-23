import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

  constructor() { 
    console.log("     checkChild: constructor");
  }

  ngOnInit() {
    console.log("     checkChild: ngOnInit");
    
  }

  ngOnChanges(): void {
    console.log("     checkChild: ngOnChanges");
    
  }

  ngDoCheck(): void {
   
    console.log("     checkChild: ngDoCheck");
  }

  ngAfterContentInit(): void {
    
    console.log("     checkChild: ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    console.log("     checkChild: ngAfterViewInit");
    
  }

  ngAfterViewChecked(): void {
    console.log("     checkChild: ngAfterViewChecked");
    
  }

  ngOnDestroy(): void {
    console.log("     checkChild: ngOnDestroy");
    
  }

}
