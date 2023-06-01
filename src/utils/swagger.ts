import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const PORT = process.env.PORT ?? 3001;

const swaggerDefinition : OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Documentación Hospi-Atenea",
        version: "1.0.0"
    },
    servers: [
        {
            url: `http://localhost:${PORT}`,
            description: "Servidor local"
        }
    ], components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        }
    }
}

const swaggerOptions : OAS3Options = {
    swaggerDefinition,
    apis: ["src/index.ts", "swagger/*.ts"]
};

export default swaggerJSDoc(swaggerOptions);