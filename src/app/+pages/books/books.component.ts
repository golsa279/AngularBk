import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  http=inject(HttpClient);
  data:any[]=[];
  ngOnInit(): void {
    
      console.log('books init');
      this.http.get('http://localhost:5187/books/list').subscribe(res=>{
        this.data=res as any[];
      });
        
  }

}
