import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  arr:User[]=[]
  newUser: User = { id: 0, name: '', address: '', phone: 0 };
  isEditing: boolean = false;
  editingUser: User | null = null;
  constructor(private _userservice:UserService){}
  ngOnInit(): void {

       this.getalluser();
  }
  getalluser(){
    this._userservice.getuser().subscribe({
      next:(data)=>{
        this.arr=data;
      },
      
    })
  }
Adduser(){
  this._userservice.Adduser(this.newUser).subscribe({
    next:(user)=>{
      this.arr.push(user);
      this.newUser= { id: 0, name: '', address: '', phone: 0 };
    }
  });
}
editUser(user: User) {
  this.editingUser = { ...user };
  this.isEditing = true;
}

updateUser() {
  if (this.editingUser && this.editingUser.id !== undefined) {
    const updatedUser: User = {
      id: this.editingUser.id,
      name: this.editingUser.name || '',
      address: this.editingUser.address || '',
      phone: this.editingUser.phone || 0
    };

    this._userservice.updateUser(updatedUser).subscribe({
      next: () => {
        this.arr = this.arr.map(u => u.id === updatedUser.id ? updatedUser : u);
        this.cancelEdit();
      }
    });
  }
}

cancelEdit() {
  this.isEditing = false;
  this.editingUser = null;
}

deleteUser(id: number) {
  this._userservice.deletuser(id).subscribe({
    next: () => this.arr = this.arr.filter(user => user.id !== id)
  });
}
}