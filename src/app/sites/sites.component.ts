import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSlideToggleChange, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
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
  site: Site = new Site();

  constructor(private siteService: SiteService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    siteService.getSites().subscribe( res => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  newSite(): void {
    const dialogRef = this.dialog.open(SiteDialogComponent, {
      width: '500px',
      data: this.site
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.siteService.addNewSite(result.siteName, result.url, result.email).subscribe(res => {
          console.log(res);
          this.site = new Site();
          this.refreshSitesTable();
        });
      }
    });
  }

  editSite(site): void {
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
          this.refreshSitesTable();
        });
      }
    });
  }

  siteToggle(ob: MatSlideToggleChange, site: Site): void {
    const checked = (ob.checked) ? 1 : 0;
    console.log(checked);
    this.siteService.updateSite(site.id, site.siteName, site.url, site.email, checked).subscribe(res => {
      console.log(res);
      this.openSnackBar(site.siteName + ' was ' + ((ob.checked) ? ' enabled.' : 'disabled') , 'Close');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  refreshSitesTable(): void {
    this.siteService.getSites().subscribe(res => {
      this.dataSource.data = res;
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
    public dialogRef: MatDialogRef<SiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Site) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
