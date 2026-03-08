import { Component, OnInit } from '@angular/core';
import { GsapGlobalService } from '../../Helpers/gsap/gsap-global';

@Component({
  selector: 'app-loading-splash',
  imports: [],
  templateUrl: './loading-splash.html',
  styleUrl: './loading-splash.css'
})
export class LoadingSplashComponent implements OnInit {
  globalState: any;

  constructor(
    private gsapService: GsapGlobalService
  ) { }

  ngOnInit(): void {
    this.initLoadingAnimations();
  }

  initLoadingAnimations() {
    const animateSections = new Promise<void>((resolve) => {
      this.gsapService.globalLoadingSplash('.left-cover', '.right-cover', 1);
      setTimeout(resolve, 0);
    });

    const animateLoadingTypo = new Promise<void>((resolve) => {
      this.gsapService.globalLoaderTypo('.text-loading', 1, 0.2);
      setTimeout(resolve, 0);
    });

    Promise.all([animateSections, animateLoadingTypo]).then(() => {
      setTimeout(() => {
        this.globalState.setIsHide(true);
      }, 2000);

    }).catch((error) => {
      console.error('An error occurred:', error);
    });
  }
}


