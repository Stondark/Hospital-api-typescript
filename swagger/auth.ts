export default {
    /**
     * @swagger
     *
     * /auth/login:
     *  post:
     *    tags: 
     *      - Auth
     *    summary: Obtener token JWT
     *    description: Obtener token JWT e inicio de sesión a la plataforma
     *    requestBody:
     *      required: true
     *      content:
     *          application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      data:
     *                          type: object
     *                          properties:
     *                              username:
     *                                  type: string
     *                                  description: Nombre de usuario
     *                              password:
     *                                  type: string
     *                                  description: Contraseña
     *                                  format: password
     *                  required:
     *                      - data
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente el token JWT
     *        content: 
     *          application/json:
     *              schema:
     *                  type: object
     *                  additionalProperties:
     *                      type: string
     *      400:
     *        description: Error en la petición o usuario incorrecto
     * /auth/create:
     *  post:
     *    tags: 
     *      - Auth
     *    summary: Crear una nueva cita
     *    description: Crea una nueva cita en el sistema
     *    security:
     *      - bearerAuth: []
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              data:
     *                type: object
     *                properties:
     *                  nombre:
     *                    type: string
     *                    description: Nombre del funcionario
     *                  username:
     *                    type: string
     *                    description: Nombre de usuario del funcionario
     *                  password:
     *                    type: string
     *                    format: password
     *                    description: Contraseña del usuario
     *            required:
     *              - data
     *    responses:
     *      200:
     *        description: El funcionario ha sido creada exitosamente
     *      400:
     *        description: Error en la petición
     * 
     * /cita/{id}:
     *  get:
     *    tags: 
     *      - Cita
     *    summary: Obtener una cita por su ID
     *    description: Se obtiene en formato JSON una cita específica según su ID
     *    parameters:
     *      - in: path
     *        name: id
     *        description: ID de la cita a obtener
     *        required: true
     *        schema:
     *          type: string
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente la cita solicitada
     *      400:
     *        description: Error en la petición
     * 
     * 
     * 
     */
  }
  