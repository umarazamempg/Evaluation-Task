import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "student-list",
    templateUrl: "./student-list.component.html",
    styleUrls: ["./student-list.component.css"]
})

export class StudentListComponent implements OnInit{

    studentTableTitle: string = "Student List View";



    studentInformation: any[] =[
        {
            name: "John",
            email: "abc@123",
            cell: "033123",
            age: 24,
            address: "Negra Aroyo Lane",
            numOfCourses: 5
        },
        {
            name: "Jane",
            email: "efg@123",
            cell: "123456",
            age: 33,
            address: "Bleeker Street",
            numOfCourses: 7
        },
        {
            name: "Jane",
            email: "efg@123",
            cell: "123456",
            age: 33,
            address: "Bleeker Street",
            numOfCourses: 7
        },
        {
            name: "Jane",
            email: "efg@123",
            cell: "123456",
            age: 33,
            address: "Bleeker Street",
            numOfCourses: 7
        }
    ];

    constructor(){
    }
    
    ngOnInit(): void {
        
    }

    onDeleteRow(){
        console.log("StudentListComponent::onDeleteRow() called");
    }

    onEditRow(){
        console.log("StudentListComponent::onEditRow() called");
    }
}