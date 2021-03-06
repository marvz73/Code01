define({ "api": [
  {
    "type": "post",
    "url": "/v1/account",
    "title": "Create new Account",
    "name": "CreateAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Account Name.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Account Description.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"name\",\n  \"description\": \"description\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Newly created Account data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Account.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Account Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Account Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account successfully created!\",\n  \"data\": \n  {\n  \t\"id\": 1,\n  \t\"name\": \"name\",\n  \t\"description\": \"description\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Account Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account unsuccessfully created!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId",
    "title": "Delete Account Information",
    "name": "DeleteAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Deleted Account data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Account.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Account Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Account Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account successfully deleted!\",\n  \"data\": \n  {\n  \t\"id\": 1,\n  \t\"name\": \"name\",\n  \t\"description\": \"description\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Account Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId",
    "title": "Retrive Account Information",
    "name": "GetAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Account data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Account.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Account Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Account Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account successfully fetched!\",\n  \"data\": \n  {\n  \t\"id\": 1,\n  \t\"name\": \"name\",\n  \t\"description\": \"description\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Account Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/groups",
    "title": "Retrive Groups belongs to an Account",
    "name": "GetGroups",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Groups.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Group.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Group Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Group Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Groups successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"name\": \"name\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Groups.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Groups unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/users",
    "title": "Retrive Users belongs to an Account",
    "name": "GetUsers",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Users.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.firstName",
            "description": "<p>First name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.lastName",
            "description": "<p>Last name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.middleName",
            "description": "<p>Last name of the User</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Users successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"firstName\": \"firstName\",\n  \t\t\"lastName\": \"lastName\",\n  \t\t\"middleName\": \"middleName\",\n  \t\t\"email\": \"email\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Users.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Users unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/inviteUser",
    "title": "Invite User to an Account",
    "name": "InviteUser",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"email\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User successfully invited!\",\n  \"data\": 1,\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User unsuccessfully invited!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId",
    "title": "Update Account Information",
    "name": "UpdateAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Optional Account Name.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Optional Account Description.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"name\",\n  \"description\": \"description\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Uddated Account data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Account.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Account Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Account Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account successfully updated!\",\n  \"data\": \n  {\n  \t\"id\": 1,\n  \t\"name\": \"name\",\n  \t\"description\": \"description\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Account Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Account unsuccessfully updated!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/accountUser/:userId",
    "title": "Delete AccountUser Information",
    "name": "DeleteAccountUser",
    "group": "AccountUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>AccountUser Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.role",
            "description": "<p>Role.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUser successfully deleted!\",\n  \"data\": {\n  \t\"role\": \"role\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>AccountUser Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUser unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/accountUser.js",
    "groupTitle": "AccountUser"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/accountUser/:userId",
    "title": "Retrive AccountUser Information",
    "name": "GetAccountUser",
    "group": "AccountUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>AccountUser Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.role",
            "description": "<p>Role.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUser successfully fetched!\",\n  \"data\": {\n  \t\"role\": \"role\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>AccountUser Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUser unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/accountUser.js",
    "groupTitle": "AccountUser"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/accountUser/:userId",
    "title": "Update AccountUser Information",
    "name": "UpdateAccountUser",
    "group": "AccountUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "role",
            "description": "<p>Optional Role</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"role\": \"role\"\n}.",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>AccountUser Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.role",
            "description": "<p>Role.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUser successfully updated!\",\n  \"data\": {\n  \t\"role\": \"role\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>AccountUser Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUser unsuccessfully updated!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/accountUser.js",
    "groupTitle": "AccountUser"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/accountUsers",
    "title": "Retrive AccountUsers belongs to an Account",
    "name": "GetAccountUsers",
    "group": "AccountUsers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of AccountUsers.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.role",
            "description": "<p>Role.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUsers successfully fetched!\",\n  \"data\": \n  [\n    {\n  \t\t\"role\": \"role\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of AccountUsers.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"AccountUsers unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "AccountUsers"
  },
  {
    "type": "get",
    "url": "/v1/accounts",
    "title": "Request All Accounts belongs to a User",
    "name": "GetAccounts",
    "group": "Accounts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Accounts.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Account.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Account Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Account Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"name\": \"name\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Accounts.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Accounts unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/api.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/group",
    "title": "Create new Group",
    "name": "CreateGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Group name.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Group Description.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"name\",\n  \"description\": \"description\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Group.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Group Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Group Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group successfully created!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"name\": \"name\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group unsuccessfully created!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/group.js",
    "groupTitle": "Group"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/group/:groupId",
    "title": "Delete Group Data",
    "name": "DeleteGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Group.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Group Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Group Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group successfully deleted!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"name\": \"name\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/group.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/group/:groupId",
    "title": "Retrive Group Data",
    "name": "GetGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Group.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Group Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Group Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group successfully fetched!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"name\": \"name\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/group.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/group/:groupId/projects",
    "title": "Retrive Projects belongs to Group",
    "name": "GetProjects",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Projects belongs to Group</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Project.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Project Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Project Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group Projects successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"name\": \"name\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    \t}\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Projects belongs to Group</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group Projects unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/group.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/group/:groupId",
    "title": "Update Group Data",
    "name": "UpdateGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Optional Group Name.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Optional Group Description.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"name\",\n  \"description\": \"description\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Group.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Group Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Group Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group successfully updated!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"name\": \"name\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Group Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Group unsuccessfully updated!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/group.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project",
    "title": "Create new Project",
    "name": "CreateProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Project Title.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Project Status.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Project Description.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"title\",\n  \"status\": \"status\",\n  \"description\": \"description\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Project.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Project Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Project Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project successfully created!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"title\": \"title\",\n  \t\t\"description\": \"description\",\n  \t\t\"status\": \"status\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project unsuccessfully created!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/project/:projectId",
    "title": "Delete Project Data",
    "name": "DeleteProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Project.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Project Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Project Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project successfully deleted!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"title\": \"title\",\n  \t\t\"description\": \"description\",\n  \t\t\"status\": \"status\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId",
    "title": "Retrive Project Data",
    "name": "GetProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Project.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Project Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Project Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project successfully fetched!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"title\": \"title\",\n  \t\t\"description\": \"description\",\n  \t\t\"status\": \"status\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/attachment",
    "title": "Retrive Attachment belongs to Project",
    "name": "GetProjectAttachment",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Project Attachments.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.originalName",
            "description": "<p>Attachment Original Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Attachment Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.path",
            "description": "<p>Attachment Path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.extension",
            "description": "<p>Attachment Extension.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Attachments successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"originalName\": \"originalName\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"extension\": \"extension\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Project Attachments.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Attachments unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/histories",
    "title": "Retrive Project Histories",
    "name": "GetProjectHistories",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Project Histories.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>History Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Histories successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Project Histories.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Histories unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/tasks",
    "title": "Retrive Tasks belongs to Project",
    "name": "GetTasks",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Tasks.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Task.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Task Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.completed",
            "description": "<p>Task Completed.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.desc",
            "description": "<p>Task Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.X",
            "description": "<p>Task X Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.Y",
            "description": "<p>Task Y Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.AssigneeId",
            "description": "<p>Task Assignee Id (User Id).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Tasks successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"title\": \"title\",\n  \t\t\"status\": \"status\",\n  \t\t\"completed\": \"completed\",\n  \t\t\"desc\": \"desc\",\n  \t\t\"X\": \"123.123\",\n  \t\t\"Y\": \"123.123\",\n  \t\t\"AssigneeId\": \"1\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Tasks.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Tasks unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId",
    "title": "Update Project Data",
    "name": "UpdateProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>Optional Project Title.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>Optional Project Status.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Optional Project Description.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"title\",\n  \"status\": \"status\",\n  \"description\": \"description\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Project.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Project Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Project Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project successfully updated!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"title\": \"title\",\n  \t\t\"description\": \"description\",\n  \t\t\"status\": \"status\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project unsuccessfully updated!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/attachment",
    "title": "Update Project Attachment",
    "name": "UpdateProjectAttachment",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>FIle</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>Project Attachment File.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Updated Project Attachment data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.originalName",
            "description": "<p>Attachment Original Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Attachment Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.path",
            "description": "<p>Attachment Path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.extension",
            "description": "<p>Attachment Extension.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Attachment successfully created!\",\n  \"data\": \n  {\n  \t\"id\": 1,\n  \t\"originalName\": \"originalName\",\n  \t\"name\": \"name\",\n  \t\"path\": \"path\",\n  \t\"extension\": \"extension\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Attachment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Attachment unsuccessfully created!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/project/:projectId/attachment/:attachmentId",
    "title": "Delete Project Attachment",
    "name": "DeleteProjectAttachment",
    "group": "Project_Attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "attachmentId",
            "description": "<p>Attachment Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Attachment Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.originalName",
            "description": "<p>Attachment Original Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Attachment Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.path",
            "description": "<p>Attachment Path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.extension",
            "description": "<p>Attachment Extension.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Attachment successfully deleted!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"originalName\": \"originalName\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"extension\": \"extension\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Attachment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project Attachment unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/projectAttachment.js",
    "groupTitle": "Project_Attachment"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId",
    "title": "Retrive Project Attachment as File",
    "name": "GetProject",
    "group": "Project_Attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>Attachment File.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Project Attachment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Project unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/projectAttachment.js",
    "groupTitle": "Project_Attachment"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/projects",
    "title": "Retrive Projects belongs to an Account",
    "name": "GetProjects",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Projects.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Project.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Project Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.description",
            "description": "<p>Project Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Projects successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"title\": \"title\",\n  \t\t\"status\": \"status\",\n  \t\t\"description\": \"description\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Projects.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Projects unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/account.js",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/task",
    "title": "Create New Task on Project",
    "name": "CreateTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Task Title.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "completed",
            "description": "<p>Task Completed.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "desc",
            "description": "<p>Task Description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "X",
            "description": "<p>Task X Coordinate.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Y",
            "description": "<p>Task Y Coordinate.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "AssigneeId",
            "description": "<p>Task Assignee Id (User Id).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"title\": \"title\",\n\t\t\"status\": \"status\",\n\t\t\"completed\": \"completed\",\n\t\t\"desc\": \"desc\",\n\t\t\"X\": \"123.123\",\n\t\t\"Y\": \"123.123\",\n\t\t\"AssigneeId\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Task.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Task Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.completed",
            "description": "<p>Task Completed.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.desc",
            "description": "<p>Task Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.X",
            "description": "<p>Task X Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.Y",
            "description": "<p>Task Y Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.AssigneeId",
            "description": "<p>Task Assignee Id (User Id).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task successfully created!\",\n  \"data\": {\n  \t\"id\": 1,\n  \t\"title\": \"title\",\n  \t\"status\": \"status\",\n  \t\"completed\": \"completed\",\n  \t\"desc\": \"desc\",\n  \t\"X\": \"123.123\",\n  \t\"Y\": \"123.123\",\n  \t\"AssigneeId\": \"1\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task unsuccessfully created!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId",
    "title": "Delete Task Data",
    "name": "DeleteTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Task.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Task Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.completed",
            "description": "<p>Task Completed.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.desc",
            "description": "<p>Task Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.X",
            "description": "<p>Task X Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.Y",
            "description": "<p>Task Y Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.AssigneeId",
            "description": "<p>Task Assignee Id (User Id).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task successfully deleted!\",\n  \"data\": {\n  \t\"id\": 1,\n  \t\"title\": \"title\",\n  \t\"status\": \"status\",\n  \t\"completed\": \"completed\",\n  \t\"desc\": \"desc\",\n  \t\"X\": \"123.123\",\n  \t\"Y\": \"123.123\",\n  \t\"AssigneeId\": \"1\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/attachments",
    "title": "Retrive Task Attachments",
    "name": "GetTaskAttachments",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Task Attachments.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.originalName",
            "description": "<p>Attachment Original Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Attachment Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.path",
            "description": "<p>Attachment Path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.extension",
            "description": "<p>Attachment Extension.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Attachments successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"originalName\": \"originalName\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"extension\": \"extension\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Task Attachments.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Attachments unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/comments",
    "title": "Retrive Task Comments",
    "name": "GetTaskComments",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Task Comments.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>Comment Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable",
            "description": "<p>Comment Commentable.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable_id",
            "description": "<p>Comment Commentable Id.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comments successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Task Comments.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comments unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/histories",
    "title": "Retrive Task Histories",
    "name": "GetTaskHistories",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Task Histories.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>History Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Histories successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Task Histories.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Histories unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId",
    "title": "Retrieve Task Data",
    "name": "RetrieveTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Task.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Task Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.completed",
            "description": "<p>Task Completed.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.desc",
            "description": "<p>Task Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.X",
            "description": "<p>Task X Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.Y",
            "description": "<p>Task Y Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.AssigneeId",
            "description": "<p>Task Assignee Id (User Id).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task successfully fetched!\",\n  \"data\": {\n  \t\"id\": 1,\n  \t\"title\": \"title\",\n  \t\"status\": \"status\",\n  \t\"completed\": \"completed\",\n  \t\"desc\": \"desc\",\n  \t\"X\": \"123.123\",\n  \t\"Y\": \"123.123\",\n  \t\"AssigneeId\": \"1\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId",
    "title": "Update Task Data",
    "name": "UpdateTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>Optional Task Title.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>Optional Status.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "completed",
            "description": "<p>Optional Task Completed.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "desc",
            "description": "<p>Optional Task Description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "X",
            "description": "<p>Optional Task X Coordinate.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "Y",
            "description": "<p>Optional Task Y Coordinate.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "AssigneeId",
            "description": "<p>Optional Task Assignee Id (User Id).</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"title\": \"title\",\n\t\t\"status\": \"status\",\n\t\t\"completed\": \"completed\",\n\t\t\"desc\": \"desc\",\n\t\t\"X\": \"123.123\",\n\t\t\"Y\": \"123.123\",\n\t\t\"AssigneeId\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Task.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.title",
            "description": "<p>Task Title.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>Status.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.completed",
            "description": "<p>Task Completed.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.desc",
            "description": "<p>Task Description.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.X",
            "description": "<p>Task X Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.Y",
            "description": "<p>Task Y Coordinate.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.AssigneeId",
            "description": "<p>Task Assignee Id (User Id).</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task successfully updated!\",\n  \"data\": {\n  \t\"id\": 1,\n  \t\"title\": \"title\",\n  \t\"status\": \"status\",\n  \t\"completed\": \"completed\",\n  \t\"desc\": \"desc\",\n  \t\"X\": \"123.123\",\n  \t\"Y\": \"123.123\",\n  \t\"AssigneeId\": \"1\",\n  \t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task unsuccessfully updated!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/attachments",
    "title": "Upload Task Attachments",
    "name": "UploadTaskAttachments",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>File to be uploaded.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Uploaded Task Attachments.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.originalName",
            "description": "<p>Attachment Original Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Attachment Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.path",
            "description": "<p>Attachment Path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.extension",
            "description": "<p>Attachment Extension.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Attachments successfully uploaded!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"originalName\": \"originalName\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"extension\": \"extension\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Task Attachments.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Attachments unsuccessfully uploaded!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/attachment/:taskAttachmentId",
    "title": "Delete Task Attachment",
    "name": "DeleteTaskAttachment",
    "group": "Task_Attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskAttachmentId",
            "description": "<p>Task Attachment Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Attachment Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.originalName",
            "description": "<p>Attachment Original Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Attachment Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.path",
            "description": "<p>Attachment Path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.extension",
            "description": "<p>Attachment Extension.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Attachment successfully deleted!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"originalName\": \"originalName\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"extension\": \"extension\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n   },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Attachment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Attachment unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskAttachment.js",
    "groupTitle": "Task_Attachment"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/attachment/:taskAttachmentId",
    "title": "Retrive Task Attachment as File",
    "name": "GetTaskAttachment",
    "group": "Task_Attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskAttachmentId",
            "description": "<p>Task Attachment Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>File.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Attachment Daya.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Attachment unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskAttachment.js",
    "groupTitle": "Task_Attachment"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/comment",
    "title": "Create New Task Comment",
    "name": "CreateTaskComment",
    "group": "Task_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "action",
            "description": "<p>Comment Action.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"action\": \"action\",\n\t\t\"comment\": \"comment\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Newly Created Task Comment Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>Comment Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable",
            "description": "<p>Comment Commentable.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable_id",
            "description": "<p>Comment Commentable Id.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comment successfully created!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"comment\": \"comment\",\n  \t\t\"commentable\": \"commentable\",\n  \t\t\"commentable_id\": \"commentable_id\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Comment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comment unsuccessfully created!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskComment.js",
    "groupTitle": "Task_Comment"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/comment/:commentId",
    "title": "Delete Task Comment Data",
    "name": "DeleteTaskComment",
    "group": "Task_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>Task Comment Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Comment Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>Comment Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable",
            "description": "<p>Comment Commentable.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable_id",
            "description": "<p>Comment Commentable Id.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comment successfully deleted!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"comment\": \"comment\",\n  \t\t\"commentable\": \"commentable\",\n  \t\t\"commentable_id\": \"commentable_id\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Comment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comment unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskComment.js",
    "groupTitle": "Task_Comment"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/comment/:commentId",
    "title": "Retrieve Task Comment Data",
    "name": "RetrieveTaskComment",
    "group": "Task_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>Task Comment Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Newly Created Task Comment Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>Comment Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable",
            "description": "<p>Comment Commentable.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable_id",
            "description": "<p>Comment Commentable Id.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \":Task Comment successfully fetched!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"comment\": \"comment\",\n  \t\t\"commentable\": \"commentable\",\n  \t\t\"commentable_id\": \"commentable_id\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Comment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comment unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskComment.js",
    "groupTitle": "Task_Comment"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/comment/:commentId",
    "title": "Update Task Comment Data",
    "name": "UpdateTaskComment",
    "group": "Task_Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "commentId",
            "description": "<p>Task Comment Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "action",
            "description": "<p>Optional Comment Action.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "comment",
            "description": "<p>Optional Comment.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"action\": \"action\",\n\t\t\"comment\": \"comment\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Comment Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>Comment Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.comment",
            "description": "<p>Comment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable",
            "description": "<p>Comment Commentable.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.commentable_id",
            "description": "<p>Comment Commentable Id.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comment successfully updated!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"comment\": \"comment\",\n  \t\t\"commentable\": \"commentable\",\n  \t\t\"commentable_id\": \"commentable_id\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task Comment Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task Comment unsuccessfully updated!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskComment.js",
    "groupTitle": "Task_Comment"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/history",
    "title": "Create Task History",
    "name": "CreateTaskHistory",
    "group": "Task_History",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "action",
            "description": "<p>History Action.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"action\": \"action\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>History Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History successfully created!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History unsuccessfully created!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskHistory.js",
    "groupTitle": "Task_History"
  },
  {
    "type": "delete",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/history/:historyId",
    "title": "Delete Task History",
    "name": "DeleteTaskHistory",
    "group": "Task_History",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "historyId",
            "description": "<p>History Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>History Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History successfully deleted!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History unsuccessfully deleted!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskHistory.js",
    "groupTitle": "Task_History"
  },
  {
    "type": "get",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/history/:historyId",
    "title": "Retrieve Task History",
    "name": "RetrieveTaskHistory",
    "group": "Task_History",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "historyId",
            "description": "<p>History Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>History Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History successfully fetched!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskHistory.js",
    "groupTitle": "Task_History"
  },
  {
    "type": "post",
    "url": "/v1/account/:accountId/project/:projectId/task/:taskId/history/:historyId",
    "title": "Update Task History",
    "name": "UpdateTaskHistory",
    "group": "Task_History",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "accountId",
            "description": "<p>Account Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "projectId",
            "description": "<p>Project Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "taskId",
            "description": "<p>Task Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "historyId",
            "description": "<p>History Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "action",
            "description": "<p>Optional History Action.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"action\": \"action\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the History.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.action",
            "description": "<p>History Action.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History successfully updated!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"action\": \"action\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>Task History.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Task History unsuccessfully updated!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/taskHistory.js",
    "groupTitle": "Task_History"
  },
  {
    "type": "get",
    "url": "/v1/user/:userId",
    "title": "Retrieve User",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>User Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.firstName",
            "description": "<p>First name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.lastName",
            "description": "<p>Last name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.middleName",
            "description": "<p>Last name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User successfully fetched!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"firstName\": \"firstName\",\n  \t\t\"lastName\": \"lastName\",\n  \t\t\"middleName\": \"middleName\",\n  \t\t\"email\": \"email\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n  },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>User Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v1/user/:userId/profilePicture",
    "title": "Retrieve User Profile Picture as File",
    "name": "GetUserProfilePicture",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>User Profile Picture.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>User Profile Picture Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User Profile Picture unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/v1/user/:userId/profilePicture",
    "title": "Upload User Profile Picture",
    "name": "UploadUserProfilePicture",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>User Profile Picture.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>User Profile Picture Data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the Attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.originalName",
            "description": "<p>Attachment Original Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.name",
            "description": "<p>Attachment Name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.path",
            "description": "<p>Attachment Path.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.extension",
            "description": "<p>Attachment Extension.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User Profile Picture successfully uploaded!\",\n  \"data\": {\n  \t\t\"id\": 1,\n  \t\t\"originalName\": \"originalName\",\n  \t\t\"name\": \"name\",\n  \t\t\"path\": \"path\",\n  \t\t\"extension\": \"extension\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n   },\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>User Profile Picture Data.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User Profile Picture unsuccessfully uploaded!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v1/users",
    "title": "Request All Users",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Users.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.firstName",
            "description": "<p>First name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.lastName",
            "description": "<p>Last name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.middleName",
            "description": "<p>Last name of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date Created.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date Updated.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"User successfully fetched!\",\n  \"data\": \n  [\n  \t{\n  \t\t\"id\": 1,\n  \t\t\"firstName\": \"firstName\",\n  \t\t\"lastName\": \"lastName\",\n  \t\t\"middleName\": \"middleName\",\n  \t\t\"email\": \"email\",\n  \t\t\"createdAt\": \"2015-08-11T03:12:49.000Z\",\n  \t\t\"updatedAt\": \"2015-08-11T03:12:49.000Z\"\n    }\n  ],\n  \"error\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "msg",
            "description": "<p>Message of the API.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>List of Users.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "error",
            "description": "<p>Error Object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Users unsuccessfully fetched!\",\n  \"data\": null,\n  \"error\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/api.js",
    "groupTitle": "Users"
  }
] });