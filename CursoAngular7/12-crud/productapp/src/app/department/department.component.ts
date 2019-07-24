import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depName: string = '';
  departments: Department[] = [];
  depEdit: Department = null;
  private unSubscribe$: Subject<any> = new Subject();
  constructor(
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    this.departmentService.get()
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe(
      (deps) => this.departments = deps
    )
  }

  save() {
    if (this.depEdit) {
      this.departmentService.update({ name: this.depName, _id: this.depEdit._id })
        .subscribe((dep) => {
          this.notify("Updated!");
        },
          (err) => {
            this.notify("Error!");
            console.log(err);
          })
    }
    else {
      this.departmentService.add({
        name: this.depName
      }).subscribe(
        (dep) => {
          console.log(dep);
          this.clearFields();
          this.notify("Inserted");
        },
        (err) => {
          console.error(err);
        }
      )
    }

  }

  cancel() {
    this.clearFields();
  }

  edit(dep: Department) {
    this.depName = dep.name;
    this.depEdit = dep;
  }

  delete(dep: Department) {
    this.departmentService.del(dep)
      .subscribe(() => {
        this.notify("Removed")
      },
        (err) => this.notify(err.error.msg)
      )
  }

  clearFields() {
    this.depName = '';
    this.depEdit = null;
  }

  notify(msg: string) {
    this.snackBar.open(msg, "Ok", { duration: 3000 })
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    
  }

}
