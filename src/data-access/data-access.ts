import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { RentalApplication, RentalApplicationModel } from "./model";

export class DataAccess extends GenericDataAccess<RentalApplicationModel, RentalApplication>{
    constructor(model: RentalApplicationModel){
        super(model)
    }
}