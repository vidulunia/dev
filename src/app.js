const express = require ('express');

const app = express();

const {adminAuth , userAuth} = require ("./middleware/auth");

app.use("/admin" , adminAuth );

app.post("user/login" , (req,res) => {
    res.send("User logged in successfully");
});

app.get("/user" , userAuth, (req,res) =>{
    res.send("User data sent");
});

app.get("/admin/getAlldata" , (req,res) => {
    res.send("All data sent");   
});

app.get("/admin/deleteuser" , (req,res) => {
    res.send("Deleted user");
});
app.listen(7777, () => {
    console.log("Server is successfully running on port 7777...");
});