import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() colour?: string;

  constructor(private elm: ElementRef) {
    elm.nativeElement.style.cursor = "pointer";
   }

  ngOnInit(): void {

  }
  @HostListener("mouseenter") hover(btn: any) {
    this.elm.nativeElement.style.backgroundColor = "pink";    // sets background color to pink when hovering over tag/type
    this.elm.nativeElement.style.borderBottom = "3px solid green"; // sets underline color to pink when hovering over tag/type
//    this.elm.nativeElement.style.fontWeight = "bold";   moved the bold css to the scss in /content-card
  
  }
  @HostListener("mouseleave") hoverAway(btn: any) {
    this.elm.nativeElement.style.backgroundColor = "";  // removes background color if hovered off of tag/type
    this.elm.nativeElement.style.borderBottom = ""; // removes underline color if hovered off of tag/type
  //  this.elm.nativeElement.style.fontWeight = "";


  }

}
