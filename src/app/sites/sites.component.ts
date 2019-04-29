import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {SiteService} from '../services/site.service';
import {Site} from '../model/site';

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

  constructor(private siteService: SiteService, private dialog: MatDialog) {
    siteService.getSites().subscribe( res => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  editeSite(site): void {
    const dialogRef = this.dialog.open(SiteDialogComponent, {
      width: '500px',
      data: site
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const status = (result.active) ? 1 : 0;
        this.siteService.updateSite(site.id, result.siteName, result.url, result.email, status).subscribe(res => {
          console.log(res);
        });
      }
    });
  }
}

@Component({
  selector: 'app-site-dialog',
  templateUrl: 'site-dialog.html',
  styleUrls: ['dialog.less']
})
export class SiteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CronDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Site) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
