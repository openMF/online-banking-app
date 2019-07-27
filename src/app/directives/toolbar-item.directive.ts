// import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
//
// @Directive({
//   selector: '[appToolbarItem]'
// })
// export class ToolbarItemDirective {
//
//
//   constructor(private el: ElementRef,
//               private renderer: Renderer) {
//                 // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'red');
//
//   }
//   @HostListener('mouseenter', ['$event']) onMouseEnter() {
//     // this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
//     // this.clickEvent(event);
//   }
//
//   @HostListener('mouseleave') onMouseLeave() {
//     // this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'green');
//   }
//
//   @HostListener('click', ['$event'])
//   clickEvent(event) {
//     // this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'black');
//     // event.preventDefault();
//     // event.stopPropagation();
//     // console.log('Click from Host Element!');
//   }
// }
