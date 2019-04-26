import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SiteService} from '../services/site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.less'],
  providers: [SiteService]
})
export class SitesComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'siteName', 'url', 'updatedAt', 'email', 'active', 'status', 'controls'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private siteService: SiteService) {
    siteService.getSites().subscribe( res => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
