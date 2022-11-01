export enum Fields{
    Science = "Science",
    History = "History",
    Arts = "Arts"
}
export interface Course{
    name?: string,
    field?: Fields,
    creditHrs?: number,
    isLab?: boolean
}