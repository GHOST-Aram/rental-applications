import { NextFunction, Request, Response } from 'express-serve-static-core';
import { DataAccess } from '../data-access/data-access';
import { GenericController } from '../z-library/bases/generic-controller'
export class Controller extends GenericController<DataAccess>{
    constructor(dataAccess: DataAccess){
        super(dataAccess)
    }

    public addNew = async(req: Request, res: Response, next: NextFunction) => {
        const inputData = req.body

        try {
            //Check if the document exists
            const existingDocument = await this.dataAccess.findExistingApplication(
                inputData.tenant, inputData.propertyApplied)

            if(existingDocument){
                this.respondWithConflict(res)
            }

            const newDocument = await this.dataAccess.createNew(inputData)
            this.respondWithCreatedResource(newDocument.id, res)
        } catch (error) {
            next(error)
        } 
    }

    public  getByTenantId = async(req: Request, res: Response, next: NextFunction) =>{
        const tenantId = req.params.id

        try{
            const application =  await this.dataAccess.findOneByTenantId(tenantId)

            if(application)
                this.respondWithFoundResource(application, res)
            this.respondWithNotFound(res)
        } catch (error) {
            next(error)
        }
    }
}