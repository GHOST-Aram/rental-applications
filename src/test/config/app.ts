import express from "express"
import { MockDataAccess } from "../../data-access/mock-data-access"
import { ApplicationSubmission } from '../../data-access/model'
import { Controller } from "../../controllers/controller"
import { routesWrapper } from "../../routes/urls"


const app = express()

app.use(express.json)
app.use(express.urlencoded({ extended: true }))

const dataAccess = new MockDataAccess(ApplicationSubmission)
const controller = new Controller(dataAccess)

const routes = routesWrapper(controller)

app.use('/application-submissions', routes)