# @ldshape/task

A shape describing tasks and issues in Solid

This project includes shapes and generated files for [LDO](https://ldo.js.org).

## Installation

```bash
npm i @ldshape/task
```


## task

### Usage with LDO

```typescript
import { createLdoDataset } from "@ldo/ldo";
import { TrackerShapeType, TaskShapeType, TaskMessageShapeType } from "@ldshape/task";
import type { Tracker, Task, TaskMessage } from "@ldshape/task";
const ldoDataset = createLdoDataset();

const example0: Tracker = ldoDataset
  .usingType(TrackerShapeType)
  .fromSubject("http://example.com/example0");

const example1: Task = ldoDataset
  .usingType(TaskShapeType)
  .fromSubject("http://example.com/example1");

const example2: TaskMessage = ldoDataset
  .usingType(TaskMessageShapeType)
  .fromSubject("http://example.com/example2");

```

### ShEx Typings

```shex
PREFIX srs: <https://shaperepo.com/schemas/task#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX wf: <http://www.w3.org/2005/01/wf/flow#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX sioc: <http://rdfs.org/sioc/ns#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

srs:Tracker EXTRA a {
  a [ wf:Tracker ] ;
  dc:author IRI ?;
  dc:created xsd:dateTime *;
  wf:assigneeClas [ foaf:Person ]? ;
  wf:initialState: ([ wf:Open ] OR [wf:Closed]) ?;
  wf:issueClass [ wf:Task ] ?;
  wf:stateStore IRI;
}

srs:Task EXTRA a {
  a ([ wf:Open ] OR [wf:Closed]) ;
  dc:title xsd:string ?;
  dct:created xsd:dateTime ?;
  wf:description xsd:string ?;
  wf:message @srs:TaskMessage *;
}

srs:TaskMessage EXTRA a {
  dct:created xsd:dateTime ?;
  sioc:content xsd:string ?;
  foaf:maker IRI ;
}
```

### TypeScript Typings

```typescript
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

```

## Sponsorship
This project was made possible by a grant from NGI Zero Entrust via nlnet. Learn more on the [NLnet project page](https://nlnet.nl/project/SolidUsableApps/).

[<img src="https://nlnet.nl/logo/banner.png" alt="nlnet foundation logo" width="300" />](https://nlnet.nl/)
[<img src="https://nlnet.nl/image/logos/NGI0Entrust_tag.svg" alt="NGI Zero Entrust Logo" width="300" />](https://nlnet.nl/)

## Liscense
MIT
