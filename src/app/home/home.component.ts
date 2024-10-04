import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   @ViewChildren('scroller') scrollers!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.addAnimation();
  }

  addAnimation() {
    this.scrollers.forEach((scrollerRef) => {
      const scroller = scrollerRef.nativeElement;

      this.renderer.setAttribute(scroller, 'data-animated', 'true');

      const scrollerInner = scroller.querySelector('.scroller-inner');
      const scrollerContent = Array.from(scrollerInner!.children);

      scrollerContent.forEach((item: any) => {
        const duplicatedItem = this.renderer.createElement(
          item.tagName.toLowerCase()
        );
        this.renderer.setProperty(duplicatedItem, 'innerHTML', item.innerHTML);
        this.renderer.setAttribute(duplicatedItem, 'src', item.src);
        this.renderer.setAttribute(duplicatedItem, 'class', item.classList);
        this.renderer.setAttribute(duplicatedItem, 'aria-hidden', 'true');
        this.renderer.appendChild(scrollerInner, duplicatedItem);
        console.log(duplicatedItem, 'scroller content');
      });
    });
  }
}
