import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit {
  developers: { id: number; name: string; languages: string[]; detail: string; }[];
  cols: { field: string; header: string; }[];

  constructor() { }

  ngOnInit() {
  this.developers = [{id: 1, name: 'Swathi', languages: ['C', 'C++', 'Javascript'],detail:'details'},
  {id: 2, name: 'Ranjani', languages: ['Java', 'C++', 'R'],detail:'details'},
  {id: 3, name: 'Priyanka', languages: ['C', 'Kotlin', 'Python'],detail:'details'},
  {id: 4, name: 'Kesav', languages: ['Ruby', 'Kotlin'],detail:'details'},
  {id: 5, name: 'Govind', languages: ['Scala', 'C#', 'Php'],detail:'details'},
  {id: 6, name: 'Ram', languages: ['Typescript', 'Shell', 'Python'],detail:'details'},
  {id: 7, name: 'Rukmini', languages: ['Java', 'Javascript', 'Groovy'],detail:'details'}];
  
this.cols = [{field: 'id', header: 'ID'},
{field: 'name', header: 'Name'},
{field: 'languages', header: 'Languages Known'},
{field: 'detail', header:"Developer's detail"}];
  }

}
