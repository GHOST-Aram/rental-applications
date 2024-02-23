import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { ApplicationSubmission, ApplicationSubmissionModel } from "./model";

export class DataAccess extends GenericDataAccess<ApplicationSubmissionModel, ApplicationSubmission>{
    constructor(model: ApplicationSubmissionModel){
        super(model)
    }
}