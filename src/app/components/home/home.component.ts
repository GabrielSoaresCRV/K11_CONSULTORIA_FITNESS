import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsleterFormComponent } from '../newsleter-form/newsleter-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    NewsleterFormComponent


  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
