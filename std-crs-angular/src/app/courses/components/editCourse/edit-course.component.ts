import { Component } from "@angular/core";
import { Course } from "src/models/course.model";


@Component({
    selector: 'edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent{


    getCourseObj(courseObj: Course){
        console.log("EditCourseComponent::getCourseObj() is called. " + courseObj.name + courseObj.field +
        courseObj.creditHrs + courseObj.isLab);
    }
}