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
    this.elm.nativeElement.style.backgroundColor = "yellow";
    this.elm.nativeElement.style.borderBottom = "3px solid green";
    this.elm.nativeElement.style.fontWeight = "bold";
    // this.underline(this.colour);
  }
  @HostListener("mouseleave") hoverAway(btn: any) {
    this.elm.nativeElement.style.backgroundColor = "";
    this.elm.nativeElement.style.borderBottom = "";
    this.elm.nativeElement.style.fontWeight = "";

    // this.underline('');
  }
  // private underline(plsHover?: string): void {
  // }
}
