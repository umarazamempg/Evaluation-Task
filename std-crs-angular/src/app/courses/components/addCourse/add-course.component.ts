import { Component } from "@angular/core";
import { Course } from "src/models/course.model";


@Component({
    selector: 'add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent{


    getCourseObj(courseObj: Course){
        console.log("AddCourseComponent::getCourseObj() is called. " + courseObj.name + courseObj.field +
        courseObj.creditHrs + courseObj.isLab);
    }
}