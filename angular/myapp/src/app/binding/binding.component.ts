 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   products =  [
    {name:"Pencil",price:"10",ratings:"8.3"},
    {name:"Pen",price:"50",ratings:"8.3"},
    {name:"Eraser",price:"5",ratings:"8.3"},
    {name:"Scale",price:"15",ratings:"8.3"}
   ]
}
