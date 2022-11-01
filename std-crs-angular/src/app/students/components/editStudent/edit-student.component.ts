import { Component } from "@angular/core";
import { Student } from "src/models/student.model";


@Component({
    selector: 'edit-student',
    templateUrl: './edit-student.component.html',
    styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent{


    getStudentObj(studentObj: Student){
        console.log("EditStudentComponent::getStudentObj() is called. " + studentObj.name + studentObj.email +
        studentObj.age + studentObj.cellPhone + studentObj.address);
    }
}