import express from "express"
import { DataAccess } from "../../data-access/mock-data-access"
import { ApplicationSubmission } from '../../data-access/model'
import { Controller } from "../../controllers/controller"
import { routesWrapper } from "../../routes/urls"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dataAccess = new DataAccess(ApplicationSubmission)
const controller = new Controller(dataAccess)

const routes = routesWrapper(controller)

app.use('/application-submission', routes)

export { app }