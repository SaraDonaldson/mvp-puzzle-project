
// express server object
import express from "express";
import cors from "cors"
import logger from "morgan"
import cookieParser from "cookie-parser"
import userRouter from "./Routes/userRoutes.js";
const app = express();



// middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//routes

app.use('/users', userRouter)

app.get("/test", (req, res) =>{
    res.json("server working")
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send({ msg: "Error" });
  });


//exporting ap
export default app;