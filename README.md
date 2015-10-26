eco-json-schema-form
===============
[Polymer 1.0 JSON Schema form builder](http://ecoutu.github.io/eco-json-schema-form)

## Description

This repository provides elements that take in a [JSON schema](http://json-schema.org/) and generates a DOM tree of inputs linked to the object described by the schema.

## [Demo](http://ecoutu.github.io/eco-json-schema-form)

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
<eco-json-schema-object schema=[[schema]] value={{user}}></eco-json-schema-object>
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

## Supported

### type: number

- [x] multipleOf
- [x] maximum
- [x] exclusiveMaximum
- [x] minimum
- [x] exclusiveMinimum

### type: string

- [x] maxLength
- [x] minLength
- [x] pattern

### type: array

- [x] items - object
- [ ] items - array
- [ ] additionalItems - boolean
- [ ] additionalItems - object
- [ ] maxItems
- [ ] minItems
- [ ] uniqueItems

### type: object

- [ ] maxProperties
- [ ] minProperties
- [ ] required
- [ ] additionalProperties - boolean
- [ ] additionalProperties - object
- [x] properties
- [ ] patternProperties
- [ ] dependencies, value is an object
- [ ] dependencies, value is an array

### misc

- [ ] enum - number / integer
- [ ] enum - string
- [ ] enum - array
- [ ] enum - object
- [ ] allOf
- [ ] anyOf
- [ ] oneOf
- [ ] not
- [ ] definitions
- [x] title
- [ ] description
- [ ] default
- [x] format - date-time
- [x] format - email
- [ ] format - hostname
- [ ] format - ipv4
- [ ] format - ipv6
- [x] format - uri

## Planned

* Create an element that provides a single entry point, so there is no need to choose between `<eco-json-schema-object>` and `<eco-json-schema-array>`
* Being able to set an initial value (eg, providing an instance of the schema for modification)
* Specifying which fields to show
