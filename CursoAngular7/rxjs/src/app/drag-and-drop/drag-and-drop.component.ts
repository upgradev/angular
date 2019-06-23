import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  @ViewChild('myrect') myrect : ElementRef;

  top: number = 40;
  left: number = 40;
  constructor() { }

  ngOnInit() {
    let mousedown = fromEvent(this.myrect.nativeElement, 'mousedown');
    let mousemove = fromEvent(document, 'mousemove');
    let mouseup = fromEvent(document, 'mouseup');
    
    mousedown.subscribe(
      (ed: MouseEvent) =>{
        //console.log(ed);
        let x = ed.screenX;
        let y = ed.screenY;
        
        mousemove
        .pipe(takeUntil(mouseup))
        .subscribe((em : MouseEvent) =>{
          //console.log(em);
          let offsetx = x - em.screenX;
          let offsety = y - em.screenY;
          this.top -= offsety;
          this.left -= offsetx;
          x= em.screenX;
          y = em.screenY;
        })
        
      })
  }

}
