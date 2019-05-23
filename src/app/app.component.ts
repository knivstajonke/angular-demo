import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag
} from '@angular/cdk/drag-drop';
import { doesNotThrow } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shortlist: string[] = [
    'Daenerys Targaryen',
    'Cersei Lannister',
    'Jon Snow',
    'Arya Stark',
    'Sandor Clegane',
    'Ser Bronn James',
    'Theon Greyjoy',
    'Brienne of Tarth',
    'Hodor',
    'Khal Drogo',
    'Ned Stark'
  ];

  favorites: string[] = [
    'Ramsay Bolton',
    'Drogon',
    'Littlefinger'
];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      if(event.container.data[event.previousIndex] === 'Ramsay Bolton'){
          alert('Aja baja.');
      } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
      }
    } else {
      console.log('flytta mellan listor');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onlyFivePredicate(item: CdkDrag<string[]>): boolean {
    return item.data.length < 5;
  }

  noCanDoPredicate(item: CdkDrag<string>): boolean {
      return item.data !== 'Ramsay Bolton';
  }
}
