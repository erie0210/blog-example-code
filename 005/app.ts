import { Container } from "typedi";
import express from "express"; 
import { ExampleContainer } from "./controller";

const app = express();

app.get('/health', Container.get(ExampleContainer).flow);

app.listen(3456,()=>{console.log('server on')});