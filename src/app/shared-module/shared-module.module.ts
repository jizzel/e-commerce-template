import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousalComponent } from './carousal/carousal.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { FeatureDiscoveryComponent } from './feature-discovery/feature-discovery.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarousalComponent, SearchBoxComponent, CardComponent, LoaderComponent, CollapsibleComponent, FeatureDiscoveryComponent, DatePickerComponent],
  exports: [CarousalComponent, SearchBoxComponent, CardComponent, LoaderComponent, CollapsibleComponent, FeatureDiscoveryComponent, DatePickerComponent]
})
export class SharedModuleModule { }
