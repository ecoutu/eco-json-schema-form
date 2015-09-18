eco-json-schema
===============
Polymer 1.0 JSON Schema form builder

## Description

This repository provides elements that take in a [JSON schema](http://json-schema.org/) and generates a DOM tree of inputs linked to the object described by the schema.

## [Demo](http://ecoutu.github.io/eco-json-schema/components/eco-json-schema/demo/)

With a schema:

```json
{
  "title": "User",
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    },
    "emails": {
      "type": "array",
      "title": "Email Addresses",
      "items": {
        "type": "object",
        "title": "Email Address",
        "properties": {
          "type": {
            "type": "string",
            "title": "Type"
          },
          "email": {
            "type": "string",
            "title": "Email"
          }
        }
      }
    }
  }
}
```

You can create an element:

```html
<eco-schema-object schema=[[schema]] value={{user}}></eco-schema-object>
```

Where you will be given a `user` object that looks something like this:

```json
{
  "name": "Eric Coutu",
  "emails": [
    {
      "type": "Personal",
      "email": "my@email.com"
    }
  ]
}
```

## Planned

* Create an element that provides a single entry point, so there is no need to choose between `<eco-schema-object>` and `<eco-schema-array>`
* Being able to set an initial value (eg, providing an instance of the schema for modification)
* Specifying custom components for schemas/sub schemas
* Validation
* Specifying which fields to show
* Maybe go back to using an observer for schema object. When schema changes, build `_schemaProperties`, have an observer listening on `_schemaProperties.*` that builds the form.
* For object components, is it even necessary to keep an internal array for value representation?
