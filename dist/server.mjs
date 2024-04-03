import {
  registerForEvent
} from "./chunk-HN5N7WLQ.mjs";
import {
  errorHandler
} from "./chunk-UO3VS5QW.mjs";
import {
  checkIn
} from "./chunk-HBIQRW65.mjs";
import {
  createEvent
} from "./chunk-NWAWD52K.mjs";
import "./chunk-AYX3DEJC.mjs";
import {
  getAttendeeBadge
} from "./chunk-VXJLXAHD.mjs";
import {
  getEventAttendees
} from "./chunk-PW7GMEUZ.mjs";
import {
  getEvent
} from "./chunk-CKXCGKH7.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-TBK3UKLM.mjs";
import "./chunk-SWTOKJCE.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
