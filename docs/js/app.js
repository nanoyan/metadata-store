
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "metadata-store",
    "description": "Data interface for defining metadata store based on vocabularies of IQB.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "https://w3id.org/iqb/vocabs/md-profile-store.schema.json",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Metadata Profile Store",
        "description": "File to list profiles in a metadata profile store",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_]+$",
            "description": "Identifier for the metadata profile store as part of the uri",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "creator": {
            "type": "string",
            "description": "Creator as person or institution",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "title": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "lang": {
                  "type": "string",
                  "pattern": "^[a-z]+$",
                  "description": "Language of the value",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "value": {
                  "type": "string",
                  "description": "Language of the value",
                  "x-parser-schema-id": "<anonymous-schema-6>"
                }
              },
              "required": [
                "lang",
                "value"
              ],
              "x-parser-schema-id": "<anonymous-schema-4>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "profiles": {
            "type": "array",
            "description": "Names of the profile json files",
            "items": {
              "type": "string",
              "minLength": 1,
              "x-parser-schema-id": "<anonymous-schema-8>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-7>"
          }
        },
        "required": [
          "id",
          "title",
          "creator",
          "profiles"
        ],
        "x-parser-schema-id": "https://w3id.org/iqb/vocabs/md-profile-store.schema.json"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  