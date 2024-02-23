import { DataAccess } from "./data-access";
import { ApplicationSubmissionModel } from "./model";

export class MockDataAccess extends DataAccess{
    constructor(model: ApplicationSubmissionModel){
        super(model)
    }
}