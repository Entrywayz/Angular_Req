import { NgFor } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  shopScroll = [
    {
      name: "Watches",
      img: "watches.png",
    },
    {
      name: "Glasses",
      img: "glasses.png",
    },
    {
      name: "Shoes",
      img: "shoes.png",
    },
    {
      name: "Belts",
      img: "belts.png",
    },
    {
      name: "T-Shirts",
      img: "t-shirt.png",
    },
    {
      name: "Hoodies",
      img: "hoodie.png",
    },
    {
      name: "Shorts",
      img: "shorts.png",
    },
  ];

  private isScrolling: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
      const container = this.el.nativeElement.querySelector('.container__list');
  
      if (container && !this.isScrolling) {
          event.preventDefault();
  
          this.isScrolling = true;
  
          const scrollStep = 200; 
  
          container.scrollBy({
              left: event.deltaY < 0 ? -scrollStep : scrollStep,
              behavior: 'smooth',
          });
  
          setTimeout(() => {
              this.isScrolling = false;
          }, 250); 
      }
  }
}
