import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, NgZone, TemplateRef, ViewChild } from '@angular/core';
import { CountryService } from '../country.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  video_playback_error: boolean = false;
  isAvailable: boolean = true;
  value = 100;
  logoImg =
    'data:image/png;base64,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';
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  InFocus = [
    {
      img: this.logoImg,
      link: 'https://wilmu.mediaspace.kaltura.com/media/Breaking+New+GroundA+Wilmington+University%27s+Law+School+and+Convocation+Center/1_emarmji5',
      name: 'Watch the Groundbreaking Ceremony Recap',
      detail:
        'WilmU announced the construction of two landmark buildings at its Brandywine site: a Convocation Center and a School of Law.',
    },
    {
      img: this.logoImg,
      link: 'https://wilmu.mediaspace.kaltura.com/media/Breaking+New+GroundA+Wilmington+University%27s+Law+School+and+Convocation+Center/1_emarmji5',
      name: 'WilmU Cheer Wins 10th Title',
      detail:
        'Cheer Team defends UCA Championship title in Orlando.Cheer Team defends UCA Championship title in Orlando.',
    },
    {
      img: this.logoImg,
      link: 'https://wilmu.mediaspace.kaltura.com/media/Breaking+New+GroundA+Wilmington+University%27s+Law+School+and+Convocation+Center/1_emarmji5',
      name: 'Human Trafficking Studies Webinars',
      detail:
        'Join an upcoming webinar during Human Trafficking Prevention Month. Become part of the initiative to educate, advocate and end human trafficking.',
    },
  ];
  featuredNews = [
    {
      img: 'https://blog.wilmu.edu/news/wp-content/uploads/sites/28/2024/01/Wilmington-University-groundbreaking-Convocation-Center-School-Law-sq-1.jpg',
      link: 'https://wilmu.mediaspace.kaltura.com/media/Breaking+New+GroundA+Wilmington+University%27s+Law+School+and+Convocation+Center/1_emarmji5',
      name: 'Official Groundbreaking Ceremony at Wilmington University’s Brandywine Location',
      date: '01/25/2024',
      tag: 'EVENTS',
    },
    {
      img: 'https://blog.wilmu.edu/news/wp-content/uploads/sites/28/2024/01/wilmington-university-longwood-grant-brandwyine-campus.jpg',
      link: 'https://wilmu.mediaspace.kaltura.com/media/Breaking+New+GroundA+Wilmington+University%27s+Law+School+and+Convocation+Center/1_emarmji5',
      name: 'Wilmington University Receives $1 Million Grant from the Longwood Foundation',
      date: '01/12/2024',
      tag: 'ACADEMIC NEWS',
    },
    {
      img: 'https://blog.wilmu.edu/news/wp-content/uploads/sites/28/2023/10/Tomeka-fall-2023-mag-feature.jpg',
      link: 'https://wilmu.mediaspace.kaltura.com/media/Breaking+New+GroundA+Wilmington+University%27s+Law+School+and+Convocation+Center/1_emarmji5',
      name: 'From Dreamer to Restaurateur,From Dreamer to Restaurateur',
      date: '10/16/2023',
      tag: 'MAGAZINE',
    },
    {
      img: 'https://blog.wilmu.edu/news/wp-content/uploads/sites/28/2023/10/anthony-blog.jpg',
      link: 'https://wilmu.mediaspace.kaltura.com/media/Breaking+New+GroundA+Wilmington+University%27s+Law+School+and+Convocation+Center/1_emarmji5',
      name: 'Youth and the Dangers of Social Media,Youth and the Dangers of Social Media',
      date: '10/16/2023',
      tag: 'MAGAZINE',
    },
  ];
  constructor(private md: MatDialog,private ngZone:NgZone) {}
  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
   this.playVideo();
    });
  }
  mp4_video_url="/assets/1477619_education_people_3840x2160.mp4"

playVideo() {
    let that = this;
    let v = document.createElement('video');
    v.id = 'videoElement'
    v.src = this.mp4_video_url; // we need this
    v.muted = true;
    v.autoplay = true;
    v.loop = true;
    v.preload = 'none';
    v.playsInline = true;
    v.crossOrigin="anonymous";
    v.classList.add("video-player");
    const promise = v.play();

    if (promise !== undefined) {
      promise.then(function() {
        console.log('autoplay started');
        that.videoPlayer.nativeElement.appendChild(v);
        v.muted = true;
        v.autoplay = true;
        v.src = that.mp4_video_url;

      // Automatic playback started!
      }).catch(function(error) {
        console.log('autoplay error - attempting to play again in .mp4 | ', error);
        v.muted = true;
        v.autoplay = true;
        v.src = that.mp4_video_url;
        
        let fallback = v.play();
        if (fallback !== undefined) {
          fallback.then((_: any) => {
            
            console.log('autoplay started');
            that.videoPlayer.nativeElement.appendChild(v);
            v.muted = true;
            v.autoplay = true;
            v.src = that.mp4_video_url;
            // Autoplay started!
          }).catch((error: any) => {

            console.log('autoplay failed - falling back to image | ', error)
            that.video_playback_error = true;
          })
        } else {
          that.video_playback_error = true;
        }
      });
    } else {
      this.video_playback_error = true;
    }
  }
  navigate(link) {
    window.open(link);
  }

  popUpFunction() {
    this.md.open(PopUpComponent, {
      minWidth: '60%',
    });
  }

  mgOnIt(): void {}
}
