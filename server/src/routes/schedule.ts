import { Router } from "express";

import { loadSchedule } from "../services/scheduleService";

const router = Router();

router.get("/", async (req, res) => {

  try {

    const mode =
      String(req.query.mode ?? "normal");

    const day =
      String(req.query.day ?? "monday");

    const schedule =
      await loadSchedule(
        mode,
        day,
      );

    res.json(schedule);

  } catch (error) {

    console.error(error);

    res.status(500).json({

      message:
        "Schedule could not be loaded",

    });

  }

});

export default router;