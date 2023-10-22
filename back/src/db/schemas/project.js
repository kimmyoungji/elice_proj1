import { Schema } from "mongoose";
import mongoose from "mongoose";

const ProjectSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  editorState: {
    type: Object,
    required: false,
  }
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export { ProjectModel };
