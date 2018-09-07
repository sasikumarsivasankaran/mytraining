import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{
  @Input() fntSize: string;
  constructor(private elref: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void{
    // this.elref.nativeElement.style.fontSize = '50px';
    this.renderer.setStyle(this.elref.nativeElement, 'fontSize', this.fntSize);
  }

  @HostListener('mouseover') mouseOvr(){
    this.renderer.setStyle(this.elref.nativeElement, 'color', '#ff00ff');
  }

  @HostListener('mouseout') mouseOt() {
    this.renderer.setStyle(this.elref.nativeElement, 'color', '#00ff00');
  }

  @HostListener('click') addImage() {
    const el = this.renderer.createElement('img');
    el.setAttribute('src', 'assets/images/rest.jpg');
    this.renderer.appendChild(this.elref.nativeElement, el);
    // this.renderer.createElement()
  }
}
