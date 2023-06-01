export default {
    /**
     * @swagger
     *
     * /especialidad:
     *  get:
     *    tags: 
     *      - Especialidad
     *    summary: Obtener una lista de especialidades
     *    description: Se obtiene en formato JSON la lista de las especialidades
     *    security:
     *      - bearerAuth: []
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente el listado de especialidades
     *        content: 
     *          application/json:
     *              schema:
     *                  type: object
     *                  additionalProperties:
     *                      type: string
     *      400:
     *        description: Error en la petición
     * 
     * 
     * /especialidad/{id}:
     *  get:
     *    tags: 
     *      - Especialidad
     *    summary: Obtener una especialidad por su ID
     *    description: Se obtiene en formato JSON una especialidad específica según su ID
     *    security:
     *      - bearerAuth: []
     *    parameters:
     *      - in: path
     *        name: id
     *        description: ID de la especialidad a obtener
     *        required: true
     *        schema:
     *          type: string
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente la especialidad solicitada
     *      400:
     *        description: Error en la petición
     * 
     * 
     * 
     */
  }
  