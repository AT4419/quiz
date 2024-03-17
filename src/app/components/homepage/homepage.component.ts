import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private Service: ApiService) { }
  
  datas1: any;
  datas2: any;
  
  ngOnInit(): void {
    // this.getData()
  }
  
  getData() {
    this.Service.getAllData().subscribe(
      ([pokemonList, pokemonDetails]) => {
        console.log('Pokemon List:', pokemonList);
        console.log('Pokemon Details:', pokemonDetails);
      },
      error => {
        console.error('Error:', error);
      }
    );
  // this.Service.getAllData().subscribe((res) => {
  // this.datas1 = res;
  // console.log(this.datas1)
  // }); 
  }

  get(){
    console.error('error');
  }
}
