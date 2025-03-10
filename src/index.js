import connectDB from "./db/index.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
});
connectDB();