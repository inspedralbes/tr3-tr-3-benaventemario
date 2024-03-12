-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Temps de generació: 11-03-2024 a les 08:38:45
-- Versió del servidor: 10.11.5-MariaDB-1:10.11.5+maria~ubu2204
-- Versió de PHP: 8.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `a21marbenalc_tr3`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `Entrada`
--

CREATE TABLE `Entrada` (
  `id` int(11) NOT NULL,
  `id_sessio` int(11) DEFAULT NULL,
  `id_butaca` varchar(5) DEFAULT NULL,
  `tipus_butaca` varchar(255) DEFAULT NULL,
  `preu` int(11) DEFAULT NULL,
  `data_compra` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `Pelicula`
--

CREATE TABLE `Pelicula` (
  `id` int(11) NOT NULL,
  `titol` varchar(255) DEFAULT NULL,
  `imatge` varchar(1000) DEFAULT NULL,
  `descripcio` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `Sessio`
--

CREATE TABLE `Sessio` (
  `id` int(11) NOT NULL,
  `id_peli` int(11) DEFAULT NULL,
  `dia` int(11) DEFAULT NULL,
  `hora` int(11) DEFAULT NULL,
  `descompte_espect` tinyint(1) DEFAULT NULL,
  `vip` tinyint(1) DEFAULT NULL,
  `preu_base` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `Entrada`
--
ALTER TABLE `Entrada`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sessio` (`id_sessio`);

--
-- Índexs per a la taula `Pelicula`
--
ALTER TABLE `Pelicula`
  ADD PRIMARY KEY (`id`);

--
-- Índexs per a la taula `Sessio`
--
ALTER TABLE `Sessio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `peli` (`id_peli`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `Entrada`
--
ALTER TABLE `Entrada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la taula `Pelicula`
--
ALTER TABLE `Pelicula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la taula `Sessio`
--
ALTER TABLE `Sessio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restriccions per a les taules bolcades
--

--
-- Restriccions per a la taula `Entrada`
--
ALTER TABLE `Entrada`
  ADD CONSTRAINT `Entrada_ibfk_1` FOREIGN KEY (`id_sessio`) REFERENCES `Sessio` (`id`);

--
-- Restriccions per a la taula `Sessio`
--
ALTER TABLE `Sessio`
  ADD CONSTRAINT `Sessio_ibfk_1` FOREIGN KEY (`id_peli`) REFERENCES `Pelicula` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
