import { Component, OnInit } from '@angular/core';
import { OwnerService } from "../owners/owner.service";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServerErrorDialogComponent } from '../dialogs/server-error-dialog/server-error-dialog.component';
import { Owner } from '../owners/owner.model';

@Component({
  selector: 'app-car-owners-service-form',
  templateUrl: './car-owners-service-form.component.html',
  styleUrls: ['./car-owners-service-form.component.css']
})
export class CarOwnersServiceFormComponent implements OnInit {

  CarOwnersForm = new FormGroup({
    lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
  });

  constructor(private ownerService: OwnerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ownerService.getOwners
  }

  add(): void {
    let Owner = this.CarOwnersForm.value as Owner;
    this.ownerService.createOwner.arguments(
      (res: any) => {this.CarOwnersForm.reset()},
      (error: { error: any; }) => this.dialog.open(ServerErrorDialogComponent, {data: error.error})
    )
  }

}
