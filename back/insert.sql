
--
-- Bolcament de dades per a la taula `Entrada`
--

INSERT INTO `Entrada` (`id_sessio`, `id_butaca`, `tipus_butaca`, `preu`, `data_compra`, `correu`) VALUES
(1, '1_4', 'vip', 8, '2024-03-18 08:35:02', 'marbenalc@inspedralbes.cat'),
(1, '5_8', 'estandar', 6, '2024-03-18 08:35:02', 'marbenalc@inspedralbes.cat'),
(2, '5_8', 'estandar', 6, '2024-03-18 08:35:02', NULL);

-- --------------------------------------------------------

--
-- Bolcament de dades per a la taula `Pelicula`
--

INSERT INTO `Pelicula` (`id`, `titol`, `imatge`, `descripcio`) VALUES
(1, 'Avengers: Age of Ultron', 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg', NULL),
(2, 'The Lord of the Rings: The Two Towers', 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', NULL),
(3, 'Cars 2', 'https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg', NULL),
(4, 'Green Book', 'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg', NULL);

-- --------------------------------------------------------

--
-- Bolcament de dades per a la taula `Sessio`
--

INSERT INTO `Sessio` (`id`, `id_peli`, `dia`, `hora`, `descompte_espect`, `vip`, `preu_base`) VALUES
(1, 3, 2803, 1600, 1, 0, 6),
(2, 4, 3003, 2000, 0, 1, 6),
(3, 2, 304, 1800, 1, 1, 6);
