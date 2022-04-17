import { Container } from "typedi";
import express from "express";
import { ExampleController } from "./controller";
import { wrapAsync } from './middleware/asyncWrap'

const app = express();

app.get('/', wrapAsync(async (req, res) => {
    const exampleController = Container.get(ExampleController);
    const authInfo = exampleController.getAuthInfo(req.query);
    return res.send(authInfo);
}));

export default app;