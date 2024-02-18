import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CarouselModule,
    TagModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CarouselModule,
    TagModule,
  ],
})
export class SharedModule {}
