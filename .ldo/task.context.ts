import { LdoJsonldContext } from "@ldo/jsonld-dataset-proxy";

/**
 * =============================================================================
 * taskContext: JSONLD Context for task
 * =============================================================================
 */
export const taskContext: LdoJsonldContext = {
  Tracker: {
    "@id": "http://www.w3.org/2005/01/wf/flow#Tracker",
    "@context": {
      type: {
        "@id": "@type",
      },
      author: {
        "@id": "http://purl.org/dc/elements/1.1/author",
        "@type": "@id",
      },
      created: {
        "@id": "http://purl.org/dc/elements/1.1/created",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        "@isCollection": true,
      },
      assigneeClas: {
        "@id": "http://www.w3.org/2005/01/wf/flow#assigneeClas",
      },
      "initialState:": {
        "@id": "http://www.w3.org/2005/01/wf/flow#initialState:",
        "@type": "@id",
      },
      issueClass: {
        "@id": "http://www.w3.org/2005/01/wf/flow#issueClass",
      },
      stateStore: {
        "@id": "http://www.w3.org/2005/01/wf/flow#stateStore",
        "@type": "@id",
      },
    },
  },
  Person: "http://xmlns.com/foaf/0.1/Person",
  Open: "http://www.w3.org/2005/01/wf/flow#Open",
  Closed: "http://www.w3.org/2005/01/wf/flow#Closed",
  Task: "http://www.w3.org/2005/01/wf/flow#Task",
  type: {
    "@id": "@type",
    "@type": "@id",
  },
  title: {
    "@id": "http://purl.org/dc/elements/1.1/title",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  created: {
    "@id": "http://purl.org/dc/terms/created",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  description: {
    "@id": "http://www.w3.org/2005/01/wf/flow#description",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  message: {
    "@id": "http://www.w3.org/2005/01/wf/flow#message",
    "@type": "@id",
    "@isCollection": true,
  },
  content: {
    "@id": "http://rdfs.org/sioc/ns#content",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  maker: {
    "@id": "http://xmlns.com/foaf/0.1/maker",
    "@type": "@id",
  },
};
