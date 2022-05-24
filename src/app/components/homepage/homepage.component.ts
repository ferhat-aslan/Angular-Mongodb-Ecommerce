import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  SwiperOptions,
} from 'swiper';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
images:any=[
  "https://www.allbusiness.com/asset/2021/06/eCommerce-Business-concept.jpg",
  "https://assets.entrepreneur.com/content/3x2/2000/20150629055642-shutterstock-208664602.jpeg",
  "https://www.instamojo.com/blog/wp-content/uploads/2022/02/what-is-eCommerce.jpg"
]
  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

}
