import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { ApplicationSubmission, ApplicationSubmissionModel, HydratedApplicationSub } from "./model";

export class DataAccess extends GenericDataAccess<ApplicationSubmissionModel, ApplicationSubmission>{
    constructor(model: ApplicationSubmissionModel){
        super(model)
    }

    public findExistingApplication = async(tenantId: string, propertyId: string
        ): Promise<HydratedApplicationSub | null>  =>{
        return await this.model.findOne({ tenant: tenantId }, { propertyApplied: propertyId })
    }   
}