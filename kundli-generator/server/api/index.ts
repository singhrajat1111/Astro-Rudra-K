import { Router } from "express";
import kundliRouter from "./kundli.route.js";
import matchRouter from "./match.route.js";
import panchangRouter from "./panchang.route.js";
import dashaRouter from "./dasha.route.js";
import horoscopeRouter from "./horoscope.route.js";

const api = Router();

api.use("/kundli", kundliRouter);
api.use("/match", matchRouter);
api.use("/panchang", panchangRouter);
api.use("/dasha", dashaRouter);
api.use("/horoscope", horoscopeRouter);

export default api;
