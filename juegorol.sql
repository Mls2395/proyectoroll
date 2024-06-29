-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2024 a las 02:07:58
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juegorol`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `PartidaId` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Descripción` varchar(255) DEFAULT NULL,
  `Estado` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje`
--

CREATE TABLE `personaje` (
  `PersonajeId` int(11) NOT NULL,
  `UsuarioId` int(11) DEFAULT NULL,
  `PartidaId` int(11) DEFAULT NULL,
  `NombrePersonaje` varchar(20) DEFAULT NULL,
  `Raza` varchar(20) DEFAULT NULL,
  `Clase` varchar(20) DEFAULT NULL,
  `Habilidades` varchar(255) DEFAULT NULL,
  `Fuerza` int(11) DEFAULT NULL,
  `Destreza` int(11) DEFAULT NULL,
  `Inteligencia` int(11) DEFAULT NULL,
  `Nivel` int(11) DEFAULT NULL,
  `Experiencia` int(11) DEFAULT NULL,
  `Equipamiento` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `RolId` int(11) NOT NULL,
  `nombreRol` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `UsuarioId` int(11) NOT NULL,
  `PartidaId` int(11) DEFAULT NULL,
  `RolId` int(11) DEFAULT NULL,
  `NombreUsuario` varchar(20) DEFAULT NULL,
  `Contraseña` varchar(20) DEFAULT NULL,
  `Email` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`PartidaId`);

--
-- Indices de la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`PersonajeId`),
  ADD KEY `UsuarioId` (`UsuarioId`),
  ADD KEY `PartidaId` (`PartidaId`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`RolId`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`UsuarioId`),
  ADD KEY `PartidaId` (`PartidaId`),
  ADD KEY `RolId` (`RolId`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD CONSTRAINT `personaje_ibfk_1` FOREIGN KEY (`UsuarioId`) REFERENCES `usuario` (`UsuarioId`),
  ADD CONSTRAINT `personaje_ibfk_2` FOREIGN KEY (`PartidaId`) REFERENCES `partida` (`PartidaId`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`PartidaId`) REFERENCES `partida` (`PartidaId`),
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`RolId`) REFERENCES `rol` (`RolId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
