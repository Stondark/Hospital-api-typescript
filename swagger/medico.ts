export default {
    /**
     * @swagger
     *
     * /medico:
     *  get:
     *    tags: 
     *      - Médico
     *    summary: Obtener una lista de todos los médicos
     *    description: Se obtiene en formato JSON la lista de los médicos con su respectiva información
     *    security:
     *      - bearerAuth: []
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente el listado de médicos
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
     *      - Médico
     *    summary: Crear un nuevo médico
     *    description: Crea un nuevo médico con su respectiva información personal
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
     *                  consultorio:
     *                    type: string
     *                    description: Consultorio del médico
     *                  correo:
     *                    type: string
     *                    description: correo electrónico del médico
     *                  idEspecialidad:
     *                    type: integer
     *                    description: ID de la especialidad
     *            required:
     *              - data
     *    responses:
     *      200:
     *        description: El médico ha sido creada exitosamente
     *      400:
     *        description: Error en la petición
     * 
     * /medico/{id}:
     *  put:
     *    tags: 
     *      - Médico
     *    summary: Edita un médico existente
     *    description: Edita la información de un médico existente
     *    security:
     *      - bearerAuth: []
     *    parameters:
     *      - in: path
     *        name: id
     *        description: Cédula del médico a editar
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
     *                  consultorio:
     *                    type: string
     *                    description: Consultorio del médico
     *                  correo:
     *                    type: string
     *                    description: correo electrónico del médico
     *                  idEspecialidad:
     *                    type: integer
     *                    description: ID de la especialidad
     *            required:
     *              - data
     *    responses:
     *      200:
     *        description: El médico ha sido editado exitosamente
     *      400:
     *        description: Error en la petición
     * 
     *  get:
     *    tags: 
     *      - Médico
     *    summary: Obtener un médico por Cédula
     *    description: Se obtiene en formato JSON una cita específica según su Cédula
     *    security:
     *      - bearerAuth: []
     *    parameters:
     *      - in: path
     *        name: id
     *        description: Cédula del médico a obtener
     *        required: true
     *        schema:
     *          type: string
     *    responses:
     *      200:
     *        description: Se obtuvo correctamente el médico solicitada
     *      400:
     *        description: Error en la petición 
     *  delete:
     *    tags: 
     *      - Médico
     *    summary: Eliminar un médico por Cédula
     *    description: Se elimina la información de un médico 
     *    security:
     *      - bearerAuth: []
     *    parameters:
     *      - in: path
     *        name: id
     *        description: Cédula del médico a eliminar
     *        required: true
     *        schema:
     *          type: string
     *    responses:
     *      200:
     *        description: Se eliminó correctamente el médico solicitada
     *      400:
     *        description: Error en la petición 
     */
}
  