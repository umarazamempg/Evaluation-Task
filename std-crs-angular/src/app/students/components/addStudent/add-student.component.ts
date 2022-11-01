import { Component } from "@angular/core";
import { Student } from "src/models/student.model";


@Component({
    selector: 'add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent{


    getStudentObj(studentObj: Student){
        console.log("AddStudentComponent::getStudentObj() is called. " + studentObj.name + studentObj.email +
        studentObj.age + studentObj.cellPhone + studentObj.address);
    }
}