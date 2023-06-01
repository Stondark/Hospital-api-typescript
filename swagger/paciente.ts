export default {
    /**
     * @swagger
     *
     * /paciente:
     *  get:
     *    tags: 
     *      - Paciente
     *    summary: Obtener una lista de todos los pacientes
     *    description: Se obtiene en formato JSON la lista de los pacientes con su respectiva información
     *    security:
     *      - bearerAuth: []
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente el listado de pacientes
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
     *      - Paciente
     *    summary: Crear un nuevo paciente
     *    description: Crea un nuevo paciente con su respectiva información personal
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
     *                  cedula:
     *                    type: integer
     *                    description: Cédula del asociado   
     *                  nombre:
     *                    type: string
     *                    description: Nombre del asociado
     *                  apellido:
     *                    type: string
     *                    description: Apellido del asociado
     *                  fechaNacimiento:
     *                    type: string
     *                    format: date-time  
     *                    description: Fecha de nacimiento
     *                  telefono:
     *                    type: string
     *                    description: Teléfono del asociado
     *            required:
     *              - data
     *    responses:
     *      200:
     *        description: El paciente ha sido creada exitosamente
     *      400:
     *        description: Error en la petición
     * 
     * /paciente/{id}:
     *  put:
     *    tags: 
     *      - Paciente
     *    summary: Edita un paciente existente
     *    description: Edita la información de un paciente existente
     *    security:
     *      - bearerAuth: []
     *    parameters:
     *      - in: path
     *        name: id
     *        description: Cédula del paciente a editar
     *        required: true
     *        schema:
     *          type: string
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
     *                  cedula:
     *                    type: integer
     *                    description: Cédula del asociado   
     *                  nombre:
     *                    type: string
     *                    description: Nombre del asociado
     *                  apellido:
     *                    type: string
     *                    description: Apellido del asociado
     *                  fechaNacimiento:
     *                    type: string
     *                    format: date-time  
     *                    description: Fecha de nacimiento
     *                  telefono:
     *                    type: string
     *                    description: Teléfono del asociado
     *            required:
     *              - data
     *    responses:
     *      200:
     *        description: El paciente ha sido editado exitosamente
     *      400:
     *        description: Error en la petición
     * 
     *  get:
     *    tags: 
     *      - Paciente
     *    summary: Obtener un paciente por Cédula
     *    description: Se obtiene en formato JSON una cita específica según su Cédula
     *    security:
     *      - bearerAuth: []
     *    parameters:
     *      - in: path
     *        name: id
     *        description: Cédula del paciente a obtener
     *        required: true
     *        schema:
     *          type: string
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente el paciente solicitada
     *      400:
     *        description: Error en la petición 
     *  delete:
     *    tags: 
     *      - Paciente
     *    summary: Eliminar un paciente por Cédula
     *    description: Se elimina la información de un paciente 
     *    security:
     *      - bearerAuth: []
     *    parameters:
     *      - in: path
     *        name: id
     *        description: Cédula del paciente a eliminar
     *        required: true
     *        schema:
     *          type: string
     *    responses:
     *      200:
     *        description: Se eliminó correctamente el paciente solicitada
     *      400:
     *        description: Error en la petición 
     */
}
  