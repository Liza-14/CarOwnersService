import { Component, OnInit } from '@angular/core';
import { Owner } from "../owner.model";
import { OwnerService } from "../owner.service";


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})

export class OwnerListComponent implements OnInit {

  owner = {
    lastName: '',
    firstName: '',
    middleName: '',
    id: null
  }

  edit = true;
  add = false;
  owners?: Owner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getOwners()
  }

  private getOwners() {
    this.ownerService.getOwners().subscribe(owners => this.owners = owners);
  }

  addOwner() {
    const data = {
      lastName: this.owner.lastName,
      firstName: this.owner.firstName,
      middleName: this.owner.middleName,
      id: this.owner.id
    };
    this.ownerService.createOwner(data.id!).subscribe(response => {
      console.log(response)
      this.getOwners();
    });
  }

  setOwnerEdit(owner: Owner) {
    this.owner.lastName = owner.lastName;
    this.owner.firstName = owner.firstName;
    this.owner.middleName = owner.middleName;
    this.owner.id != owner.id;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.owner.lastName = "";
    this.owner.firstName = "";
    this.owner.middleName = "";
    this.owner.id = null;
    this.edit = true;
    this.add = false;
  }

  removeOwner(owner: Owner) {
    const id = owner.id;
    console.log(owner)
    this.ownerService.deleteOwner(id!).subscribe(owner => console.log(owner));
    this.getOwners()
  }

  updateOwner(){
    this.ownerService.editOwner(this.owner.id!).subscribe(response => console.log(response));
    this.getOwners()
    this.resetValues()
  }
}





