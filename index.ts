import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { HttpRoute } from "./src/routes/HttpService";
import { AuthRoute } from "./src/routes/AuthService";
import { UserRoute } from "./src/routes/ManagerUserService";


config();
try{
const app = express();

app.use(cors())
app.use((req, res, next) => {
    bodyParser.json({
        verify: addRawBody,
    })(req, res, (err) => {
        if (err) {
            console.log(err);
            res.status(409).json({error:"true",message:"erreur"});
            return;
        }
        next();
    });
});

function addRawBody(req:any, res:any, buf:any, encoding:any) {
    req.rawBody = buf.toString();
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(HttpRoute);
app.use(AuthRoute);
app.use(UserRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server run to http://localhost:${process.env.PORT}`);
})
}catch(err){
    console.log("test")
}


