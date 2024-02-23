import { ObjectId, Model, Schema, HydratedDocument, model } from "mongoose";

export interface ApplicationSubmission{
    tenant: ObjectId
    propertyApplied: ObjectId
    identityNo : string   
    employemntStatus: string
    maritalStatus: string
    numberOfOccupants: number
    proofOdIdentity: Buffer
    proofOfIncome: Buffer
    occupation: string
    applicationStatus: String
}

export type ApplicationSubmissionModel = Model<ApplicationSubmission>


const schema = new Schema<ApplicationSubmission, ApplicationSubmissionModel>({
    propertyApplied: {
        type: Schema.Types.ObjectId,
        ref: 'Rental',
        required: true
    },
    tenant: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    identityNo: {
        type: String,
        required: true
    },
    employemntStatus: {
        type: String,
        enum: ['employed', 'unemployed', 'self-employed'],
        required: true
    },
    occupation: {
        type: String,
        required: function() { return this.employemntStatus !== 'unemployed'},
    },
    numberOfOccupants: {
        type: Number,
        required: true
    },
    proofOdIdentity: {
        type: Buffer,
        required: true
    },
    proofOfIncome: {
        type: Buffer,
        required: function() { return this.employemntStatus !== 'unemployed'}
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }  
})


export type HydratedApplicationSub = HydratedDocument<ApplicationSubmission>

export default model<ApplicationSubmission, ApplicationSubmissionModel>('ApplicationSubmission', schema)
