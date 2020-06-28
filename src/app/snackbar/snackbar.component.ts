import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message, action) {
    const snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    });
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {duration: 2000});
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-custom-snackbar',
  template:  `<span style='color: orange'>Custom Snackbar</span>`
})
export class CustomSnackbarComponent {}
