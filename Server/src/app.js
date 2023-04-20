
// express server object
import express from "express";
import cors from "cors"
import logger from "morgan"
import cookieParser from "cookie-parser"
import userRouter from "./Routes/userRoutes.js";
import appRouter from "./Routes/appRoutes.js";
import gameDataRouter from "./Routes/gameDataRoutes.js";
import authRouter from "./Routes/auth";
// import path from "path";
const app = express();

// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, "client/build")));

// middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//routes

app.use('/app_data', appRouter)
app.use('/users', userRouter)
app.use('/user_game_data', gameDataRouter)
app.use("/auth", authRouter);


app.get("/test", (req, res) =>{
    res.json("server working")
})
app.get("/app_data", (req, res) =>{
    res.json("app server working")
})

app.get("/users", (req, res) =>{
    res.json("user server working")
})

app.get("/user_game_data", (req, res) =>{
    res.json("game server working")
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