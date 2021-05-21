const router = require("express").Router();
const Workout = require("../Models/workout");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // 2 get routes - 1 all workouts and 1 for a range (7 day range)
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // put route - require pass ID in parameter. This is the route that adds exercise to the array of exercises 
  router.post("/api/workouts/id", (req, res) => {
    Workout.findById(
    {$push:{exercises:body} },
        {new: true,runValidators:true }
        )  
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;