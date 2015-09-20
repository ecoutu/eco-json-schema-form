var demoSchema = {
  "$schema": "http://json-schema.org/schema#",
  "title": "Location",
  "type": "object",
  "properties": {
    "branch": {
      "title": "Branch",
      "type": "string"
    },
    "names": {
      "title": "a",
      "type": "array",
      "items": {
        "title": "b",
        "type": "array",
        "items": {
          "title": "c",
          "type": "array",
          "items": {
            "title": "d",
            "type": "array",
            "items": {
              "title": "e",
              "type": "string"
            }
          }
        }
      }
    },
    "address": {
      "title": "Address",
      "type": "string",
      "minLength": 3
    },
    "city": {
      "title": "City",
      "type": "string",
      "minLength": 3
    },
    "province": {
      "title": "Province",
      "type": "string",
      "minLength": 2
    },
    "country": {
      "title": "Country",
      "type": "string",
      "minLength": 2
    },
    "postalCode": {
      "title": "Postal code",
      "type": "string",
      "minLength": 5
    },
    "phoneNumbers": {
      "title": "Phone numbers",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "title": "Type",
            "type": "string"
          },
          "phoneNumber": {
            "title": "Phone Number",
            "type": "object",
            "properties": {
              "areaCode": {
                "title": "Area Code",
                "type": "string"
              },
              "firstPart": {
                "title": "First Part",
                "type": "string"
              },
              "secondPart": {
                "title": "Second Part",
                "type": "string"
              }
            }
          }
        }
      }
    },
    "job": {
      "type": "object",
      "title": "Job",
      "properties": {
        "title": {
          "title": "Title",
          "type": "string"
        },
        "salary": {
          "title": "Salary",
          "type": "string"
        }
      }
    },
    "email": {
      "title": "Email",
      "type": "string",
      "pattern": "(?:^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$)|(?:^$)"
    },
    "websites":{
      "title": "Alternate websites",
      "type": "array",
      "items": {
        "title": "Website",
        "type": "string"
      }
    },
    "geo":{
      "title": "Geo coordinates",
      "type": "array",
      "description": "The geo coordinates of this profile determined through the address string, first item being the longitude, second the latitude",
      "items": {
        "type": "number"
      }
    },
    "hoursOfOperation": {
      "title": "Hours of operation",
      "type": "object",
      "description": "Hours of operation are denoted using day of the week as the key and hour as the value. Hour should be in 24 hours format.",
      "properties": {
        "Sun": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "type": "string"
            }
          }
        },
        "Mon": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "type": "string"
            }
          }
        },
        "Tue": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "type": "string"
            }
          }
        },
        "Wed": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "type": "string"
            }
          }
        },
        "Thu": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "type": "string"
            }
          }
        },
        "Fri": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "type": "string"
            }
          }
        },
        "Sat": {
          "type": "array",
          "items": {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "services": {
      "title": "Services",
      "type": "array",
      "description": "Services this business offers (ex. walk-in)",
      "items": {
        "type": "string"
      }
    },
    "establishedDate": {
      "title": "Established Date",
      "type": ["string", "null"]
    }
  }
};
