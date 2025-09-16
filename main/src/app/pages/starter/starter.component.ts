import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppBlogCardsComponent } from 'src/app/components/blog-card/blog-card.component';
import { AppWebsiteVisitsComponent } from 'src/app/components/website-visits/website-visits.component';
import { AppTopProjectsComponent } from 'src/app/components/top-projects/top-projects.component';
import { AppTotalAssetsComponent } from 'src/app/components/total-assets/total-assets.component';
import { AppLatestProductsComponent } from 'src/app/components/latest-products/latest-products.component';

@Component({
  selector: 'app-starter',
  imports: [
    MaterialModule,
    AppWebsiteVisitsComponent,
    AppTopProjectsComponent,
    AppTotalAssetsComponent,
    AppLatestProductsComponent,
    AppBlogCardsComponent
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent { }
