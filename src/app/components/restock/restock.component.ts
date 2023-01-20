import { Component, OnInit } from '@angular/core';
import { AtmService } from '../../services/atm.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {

  constructor(private atmService: AtmService) { }

  ngOnInit() {
  }

  restock(){
    this.atmService.restockAll();
  }

}
