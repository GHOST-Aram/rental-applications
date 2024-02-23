import { Validator } from "../z-library/validation/validator";

export const validator = new Validator()

export const postValidators = [
    validator.validateNumber('identityNo', { required: true}),
    validator.validateString('maritalStatus', { required: true }),
    validator.validateString('employmentStatus', { required: true }),
    validator.validateNumber('numberOfOccupants', { required: true }),
    validator.validateString('occupation', { required: true }),
    validator.validateObjectId('tenant', { required: true}),
    validator.validateObjectId('propertyApplied', { required: true})
]   