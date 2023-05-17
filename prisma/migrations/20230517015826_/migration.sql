-- CreateTable
CREATE TABLE `Paciente` (
    `cedula` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `fechaNacimiento` DATETIME(3) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cedula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medico` (
    `cedula` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `consultorio` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `idEspecialidad` INTEGER NOT NULL,

    PRIMARY KEY (`cedula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Especialidad` (
    `idEspecialidad` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEspecialidad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cita` (
    `idCita` INTEGER NOT NULL,
    `fechaHora` DATETIME(3) NOT NULL,
    `idPaciente` INTEGER NOT NULL,
    `idMedico` INTEGER NOT NULL,

    PRIMARY KEY (`idCita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Medico` ADD CONSTRAINT `Medico_idEspecialidad_fkey` FOREIGN KEY (`idEspecialidad`) REFERENCES `Especialidad`(`idEspecialidad`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_idPaciente_fkey` FOREIGN KEY (`idPaciente`) REFERENCES `Paciente`(`cedula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_idMedico_fkey` FOREIGN KEY (`idMedico`) REFERENCES `Medico`(`cedula`) ON DELETE RESTRICT ON UPDATE CASCADE;
