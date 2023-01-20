import { Component, OnInit } from '@angular/core';
import { AtmService } from '../../services/atm.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(protected atmService: AtmService) { }

  ngOnInit() {
  }

}
