import { Router } from "express";

import kundliRouter from "./kundli.route";
import matchRouter from "./match.route";
import panchangRouter from "./panchang.route";
import dashaRouter from "./dasha.route";
import horoscopeRouter from "./horoscope.route";

const api = Router();

// REGISTER ALL ROUTES
api.use("/kundli", kundliRouter);
api.use("/match", matchRouter);
api.use("/panchang", panchangRouter);   // ✔ correct one
api.use("/dasha", dashaRouter);
api.use("/horoscope", horoscopeRouter);

export default api;
