import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for task
 * =============================================================================
 */

/**
 * Tracker Type
 */
export interface Tracker {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Tracker";
  };
  author?: {
    "@id": string;
  };
  created?: string[];
  assigneeClas?: {
    "@id": "Person";
  };
  "initialState:"?:
    | {
        "@id": "Open";
      }
    | {
        "@id": "Closed";
      };
  issueClass?: {
    "@id": "Task";
  };
  stateStore: {
    "@id": string;
  };
}

/**
 * Task Type
 */
export interface Task {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type:
    | {
        "@id": "Open";
      }
    | {
        "@id": "Closed";
      };
  title?: string;
  created?: string;
  description?: string;
  message?: TaskMessage[];
}

/**
 * TaskMessage Type
 */
export interface TaskMessage {
  "@id"?: string;
  "@context"?: ContextDefinition;
  created?: string;
  content?: string;
  maker: {
    "@id": string;
  };
}
