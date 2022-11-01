import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Student } from "src/models/student.model";

@Component({
    selector: "student-form",
    templateUrl: "./student-form.component.html",
    styleUrls: ["./student-form.component.css"],
})

export class StudentFromComponent implements OnInit{
    
    @Input() studentFormTitle!:string;

    @Output() studentInfoObj!: EventEmitter<Student>;

    studentForm!: FormGroup;

    constructor(){
        this.studentFormTitle = "Generic Student Form";
        this.studentInfoObj =new EventEmitter();
        this.studentForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            cellPhone: new FormControl('', [Validators.required]),
            age: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required])
        });
    }
    
    
    ngOnInit(): void {
        
    }

    resetForm(){

    }

    onSubmit(){
        console.log("StudentFormCompnent::onSubmit() called.");

        let tempStudentObj = <Student> new Object();
        tempStudentObj.name = this.studentForm.controls['name'].value;
        tempStudentObj.email = this.studentForm.controls['email'].value;
        tempStudentObj.cellPhone = this.studentForm.controls['cellPhone'].value;
        tempStudentObj.age = this.studentForm.controls['age'].value;
        tempStudentObj.address = this.studentForm.controls['address'].value;

        this.studentInfoObj.emit(tempStudentObj);
        this.studentForm.reset();
    
    }
    
}