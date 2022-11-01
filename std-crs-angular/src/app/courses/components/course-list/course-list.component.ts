import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "course-list",
    templateUrl: "./course-list.component.html",
    styleUrls: ["./course-list.component.css"]
})

export class CourseListComponent implements OnInit{
    
    courseTableTitle: string = "Course List View";

    courseInformation: any[] =[
        {
            name: "Automata",
            field: "Science",
            creditHrs: 4,
            isLab: true,
            numOfStudents: 40
        },
        {
            name: "Discreet Structures",
            field: "Science",
            creditHrs: 3,
            isLab: false,
            numOfStudents: 33
        },
        {
            name: "Web Development",
            field: "Science",
            creditHrs: 4,
            isLab: true,
            numOfStudents: 25
        },
        {
            name: "English",
            field: "Arts",
            creditHrs: 4,
            isLab: true,
            numOfStudents: 50
        }
    ];

    constructor(){
    }
    
    ngOnInit(): void {
        
    }

    onDeleteRow(){
        console.log("CourseListComponent::onDeleteRow() called");
    }

    onEditRow(){
        console.log("CourseListComponent::onEditRow() called");
    }
}