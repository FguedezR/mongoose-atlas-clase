const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Tarea sin título",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
// podemos ver cuándo se ha generado un registro con timestamps

// le decimos el nombre del modelo.
module.exports = mongoose.model("Task", TaskSchema);
