import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-SWTOKJCE.mjs";

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError,
      PrismaClientUnknownRequestError,
      PrismaClientRustPanicError,
      PrismaClientInitializationError,
      PrismaClientValidationError,
      NotFoundError,
      getPrismaClient,
      sqltag,
      empty,
      join,
      raw,
      Decimal,
      Debug,
      objectEnumValues,
      makeStrictEnum,
      Extensions,
      warnOnce,
      defineDmmfProperty,
      Public,
      getRuntime
    } = __require("@prisma/client/runtime/library.js");
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.11.0",
      engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
    Prisma.PrismaClientValidationError = PrismaClientValidationError;
    Prisma.NotFoundError = NotFoundError;
    Prisma.Decimal = Decimal;
    Prisma.sql = sqltag;
    Prisma.empty = empty;
    Prisma.join = join;
    Prisma.raw = raw;
    Prisma.validator = Public.validator;
    Prisma.getExtensionContext = Extensions.getExtensionContext;
    Prisma.defineExtension = Extensions.defineExtension;
    Prisma.DbNull = objectEnumValues.instances.DbNull;
    Prisma.JsonNull = objectEnumValues.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues.classes.DbNull,
      JsonNull: objectEnumValues.classes.JsonNull,
      AnyNull: objectEnumValues.classes.AnyNull
    };
    var path = __require("path");
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
      Serializable: "Serializable"
    });
    exports.Prisma.EventScalarFieldEnum = {
      id: "id",
      title: "title",
      details: "details",
      slug: "slug",
      maximumAttendees: "maximumAttendees"
    };
    exports.Prisma.AttendeeScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      createdAt: "createdAt",
      eventId: "eventId"
    };
    exports.Prisma.CheckInScalarFieldEnum = {
      id: "id",
      createdAt: "createdAt",
      attendeeId: "attendeeId"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      Event: "Event",
      Attendee: "Attendee",
      CheckIn: "CheckIn"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\Jorge David Jr\\Documents\\Mikaela\\Cursos\\nlw-unite\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "5.11.0",
      "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "sqlite",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\nmodel Event {\n  id               String     @id @default(uuid())\n  title            String\n  details          String?\n  slug             String     @unique\n  maximumAttendees Int?       @map("maximum_attendees")\n  attendees        Attendee[]\n\n  @@map("events")\n}\n\nmodel Attendee {\n  id        Int      @id @default(autoincrement())\n  name      String\n  email     String\n  createdAt DateTime @default(now()) @map("created_at")\n  eventId   String   @map("event_id")\n\n  event   Event    @relation(fields: [eventId], references: [id], onDelete: Cascade)\n  checkIn CheckIn?\n\n  @@unique([eventId, email])\n  @@map("attendees")\n}\n\nmodel CheckIn {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now()) @map("created_at")\n\n  attendee   Attendee @relation(fields: [attendeeId], references: [id], onDelete: Cascade)\n  attendeeId Int      @unique @map("attendee_id")\n\n  @@map("check_ins")\n}\n',
      "inlineSchemaHash": "77a42eab9e5a257cdf3f9f958874b7c27943d22a06ca2cf91cef3f8f6be8fc02",
      "copyEngine": true
    };
    var fs = __require("fs");
    config.dirname = __dirname;
    if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config.dirname = path.join(process.cwd(), alternativePath);
      config.isBundled = true;
    }
    config.runtimeDataModel = JSON.parse('{"models":{"Event":{"dbName":"events","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"details","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"maximumAttendees","dbName":"maximum_attendees","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"attendees","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Attendee","relationName":"AttendeeToEvent","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Attendee":{"dbName":"attendees","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"eventId","dbName":"event_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"event","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Event","relationName":"AttendeeToEvent","relationFromFields":["eventId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"checkIn","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CheckIn","relationName":"AttendeeToCheckIn","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["eventId","email"]],"uniqueIndexes":[{"name":null,"fields":["eventId","email"]}],"isGenerated":false},"CheckIn":{"dbName":"check_ins","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"attendee","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Attendee","relationName":"AttendeeToCheckIn","relationFromFields":["attendeeId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"attendeeId","dbName":"attendee_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    var { warnEnvConflicts } = __require("@prisma/client/runtime/library.js");
    warnEnvConflicts({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient(config);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "node_modules/.prisma/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "node_modules/.prisma/client/default.js"(exports, module) {
    "use strict";
    module.exports = { ...require_client() };
  }
});

// node_modules/prisma/prisma-client/default.js
var require_default2 = __commonJS({
  "node_modules/prisma/prisma-client/default.js"(exports, module) {
    "use strict";
    module.exports = {
      ...require_default()
    };
  }
});

// src/lib/prisma.ts
var import_prisma_client = __toESM(require_default2());
var prisma = new import_prisma_client.PrismaClient({
  log: ["query"]
});

export {
  prisma
};
