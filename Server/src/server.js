import app from "./app.js";
import listEndpoints from "express-list-endpoints";





const port = process.env.PORT || "5002";
app.listen(port,() => {
console.table(listEndpoints(app))
console.log("Server is running on port:", port)
});