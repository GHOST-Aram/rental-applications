import { ObjectId, Model, Schema, HydratedDocument } from "mongoose";

export interface RentalApplication{
    tenant: ObjectId
    identityNo : string   
    employemntStatus: string
    maritalStatus: string
    numberOfOccupants: number
    proofOdIdentity: Buffer
    proofOfIncome: Buffer
    occupation: string
    applicationStatus: String
}

export type RentalApplicationModel = Model<RentalApplication>


const schema = new Schema<RentalApplication, RentalApplicationModel>({
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


export type HydratedRentApplication = HydratedDocument<RentalApplication>
