export default {
    /**
     * @swagger
     *
     * /cita:
     *  get:
     *    tags: 
     *      - Cita
     *    summary: Obtener una lista de citas
     *    description: Se obtiene en formato JSON la lista de las citas con su respectivo paciente y médico
     *    security:
     *      - bearerAuth: []
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente el listado de citas
     *        content: 
     *          application/json:
     *              schema:
     *                  type: object
     *                  additionalProperties:
     *                      type: string
     *      400:
     *        description: Error en la petición
     * 
     *  post:
     *    tags: 
     *      - Cita
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
     *                  fechaHora:
     *                    type: string
     *                    format: date-time
     *                    description: Fecha y hora de la cita
     *                  idPaciente:
     *                    type: integer
     *                    description: ID del paciente asociado a la cita
     *                  idMedico:
     *                    type: integer
     *                    description: ID del médico asociado a la cita
     *            required:
     *              - data
     *    responses:
     *      200:
     *        description: La cita ha sido creada exitosamente
     *      400:
     *        description: Error en la petición
     * 
     * /cita/{id}:
     *  get:
     *    tags: 
     *      - Cita
     *    summary: Obtener una cita por su ID
     *    description: Se obtiene en formato JSON una cita específica según su ID
     *    security:
     *      - bearerAuth: []
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
     */
}
  