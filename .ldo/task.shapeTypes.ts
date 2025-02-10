import { ShapeType } from "@ldo/ldo";
import { taskSchema } from "./task.schema";
import { taskContext } from "./task.context";
import { Tracker, Task, TaskMessage } from "./task.typings";

/**
 * =============================================================================
 * LDO ShapeTypes task
 * =============================================================================
 */

/**
 * Tracker ShapeType
 */
export const TrackerShapeType: ShapeType<Tracker> = {
  schema: taskSchema,
  shape: "https://shaperepo.com/schemas/task#Tracker",
  context: taskContext,
};

/**
 * Task ShapeType
 */
export const TaskShapeType: ShapeType<Task> = {
  schema: taskSchema,
  shape: "https://shaperepo.com/schemas/task#Task",
  context: taskContext,
};

/**
 * TaskMessage ShapeType
 */
export const TaskMessageShapeType: ShapeType<TaskMessage> = {
  schema: taskSchema,
  shape: "https://shaperepo.com/schemas/task#TaskMessage",
  context: taskContext,
};
