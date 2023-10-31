CREATE DATABASE IF NOT EXISTS HorarioEscolar;
USE HorarioEscolar;

-- Crear tabla Profesores
CREATE TABLE Profesores (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(255)
);

-- Crear tabla Cursos
CREATE TABLE Cursos (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(255),
    Profesor_ID INT,
    FOREIGN KEY (Profesor_ID) REFERENCES Profesores(ID)
);

-- Crear tabla Asignaturas
CREATE TABLE Asignaturas (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(255)
);

-- Crear tabla Horarios
CREATE TABLE Horarios (
    ID INT PRIMARY KEY,
    Curso_ID INT,
    Asignatura_ID INT,
    Dia VARCHAR(255),
    Hora_inicio TIME,
    Hora_fin TIME,
    FOREIGN KEY (Curso_ID) REFERENCES Cursos(ID),
    FOREIGN KEY (Asignatura_ID) REFERENCES Asignaturas(ID)
);

-- Crear tabla Alumnos
CREATE TABLE Alumnos (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(255)
);