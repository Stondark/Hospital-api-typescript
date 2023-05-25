-- CreateTable
CREATE TABLE `cita` (
    `idCita` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaHora` DATETIME(3) NOT NULL,
    `idPaciente` INTEGER NOT NULL,
    `idMedico` INTEGER NOT NULL,

    INDEX `Cita_idMedico_fkey`(`idMedico`),
    INDEX `Cita_idPaciente_fkey`(`idPaciente`),
    PRIMARY KEY (`idCita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `especialidad` (
    `idEspecialidad` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEspecialidad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medico` (
    `cedula` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `consultorio` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `idEspecialidad` INTEGER NOT NULL,

    INDEX `Medico_idEspecialidad_fkey`(`idEspecialidad`),
    PRIMARY KEY (`cedula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paciente` (
    `cedula` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `fechaNacimiento` DATETIME(3) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cedula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionario` (
    `idFuncionario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,

    UNIQUE INDEX `funcionario_username_key`(`username`),
    PRIMARY KEY (`idFuncionario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cita` ADD CONSTRAINT `Cita_idMedico_fkey` FOREIGN KEY (`idMedico`) REFERENCES `medico`(`cedula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cita` ADD CONSTRAINT `Cita_idPaciente_fkey` FOREIGN KEY (`idPaciente`) REFERENCES `paciente`(`cedula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `medico` ADD CONSTRAINT `Medico_idEspecialidad_fkey` FOREIGN KEY (`idEspecialidad`) REFERENCES `especialidad`(`idEspecialidad`) ON DELETE RESTRICT ON UPDATE CASCADE;
