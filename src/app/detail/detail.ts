import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductItem } from '../shared/types/productItem';
import { BlogService } from '../../services/BlogService';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class DetailComponent implements OnInit {
  id = '';

  productItem: ProductItem = {
    id: 0,
    name: "",
    price: 0,
    image: ""
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id)
      .subscribe(
        ({ data }: any) => {
          this.productItem.id = data.id;
          this.productItem.name = data.title;
          this.productItem.price = data.body;
          this.productItem.image = "assets/images/mlb.jpg";

        }
      )
  }

}
