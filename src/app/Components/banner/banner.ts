import { Component, OnDestroy, OnInit } from '@angular/core';
import { GsapTextService } from '../../Helpers/gsap/gsap-text';
import { InfiniteScrollingItemsComponent } from '../infinite-scrolling-items/infinite-scrolling-items';
import { IInfiniteContentScroll } from '../../Interfaces/infinite-scroll';
import { HeaderComponent } from '../../Layout/header/header';

@Component({
  selector: 'app-banner',
  imports: [InfiniteScrollingItemsComponent, HeaderComponent],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class BannerComponent implements OnInit, OnDestroy {

  skills: string[] = ['JavaScript', 'Typescript', 'Angular', 'HTML', 'CSS', 'ReactJS', 'GIT', 'JWT', 'NodeJS', 'GITHUB', 'Python', 'AI', 'ML', 'DL', 'CYBER SECURITY', 'C#', 'ASP .NET Core', 'SQL SERVER', 'NETWORKING', 'SOFTWARE', 'WEB', 'ENGINEERING']
  hashtags: string[] = ['Tech Speaker', 'Mentor', 'Author', 'Opensource'];

  infiniteScrollConfig: IInfiniteContentScroll = {
    container: {
      width: '100%',
      height: '50px'
    },
    content: {
      width: '100%',
      height: '50px',
    },
    position: 'horizontal'
  }

  currentHashtag: string = this.hashtags[0];
  private hashtagIndex: number = 0;
  private intervalId: any;

  constructor(
    private gsapService: GsapTextService
  ) { }

  ngOnInit(): void {
    this.gsapService.titleAnimation('.heading', 100, 3, 0.3);
    this.startAnimation();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAnimation(): void {
    this.intervalId = setInterval(() => {
      this.hashtagIndex = (this.hashtagIndex + 1) % this.hashtags.length;
      this.currentHashtag = this.hashtags[this.hashtagIndex];
    }, 1000);
  }
}


