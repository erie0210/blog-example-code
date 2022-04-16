import { Controller } from "./controller";
import express from "express"; 

const app = express();

app.get('/health', Controller.of().sum);

app.listen(3456,()=>{console.log('server on')});