import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Course, Fields } from "src/models/course.model";


@Component({
    selector: 'course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ["./course-form.component.css"]
})

export class CourseFormComponent implements OnInit{

    public fieldTypes = Object.values(Fields);

    @Input() courseFormTitle!:string;

    @Output() courseInfoObj!: EventEmitter<Course>;

    courseForm!: FormGroup;

    constructor(){
        this.courseFormTitle = "Generic Course Form";
        this.courseInfoObj =new EventEmitter();
        this.courseForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            field: new FormControl('', [Validators.required]),
            creditHrs: new FormControl('', [Validators.required]),
            isLab: new FormControl(false),
        });
    }
    
    
    ngOnInit(): void {
        
    }

    resetForm(){

    }

    onSubmit(){
        console.log("courseFormCompnent::onSubmit() called.");

        let tempCourseObj = <Course> new Object();

        tempCourseObj.name = this.courseForm.controls['name'].value;
        tempCourseObj.field = this.courseForm.controls['field'].value;
        tempCourseObj.creditHrs = this.courseForm.controls['creditHrs'].value;
        tempCourseObj.isLab = this.courseForm.controls['isLab'].value;

        this.courseInfoObj.emit(tempCourseObj);
        this.courseForm.reset();
    
    }

    onFieldChange(){
        console.log("CourseFormComponent::onFieldChange() called.")
    }
}