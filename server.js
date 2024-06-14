import "dotenv/config";
import express from "express";
import { banks } from "./banks.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/api/v1/bank/:branchName", (req, res) => {
    const branchName = req.params.branchName;
    // console.log("We have got req for ");
    // console.log(branchName);

    const data = banks ? banks.filter((bank) => (bank.branch.includes(branchName.toUpperCase() || branchName.toLowerCase() || branchName) ? bank : "")) : [{ details: "No banks found...." }];

    return res.status(200).json({
        success: true,
        message: `Got ${branchName} banks successfully....`,
        data,
    });
})

app.get("*", (req, res) => {
    return res.status(200).json(
        {
            success: true,
            message: `Sorry!! page not found....`,
        }
    );
})

app.listen(PORT, () => {
    console.log(`Server is up and running on the port ${PORT}`);
})

