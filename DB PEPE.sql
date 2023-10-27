-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 27 oct. 2023 à 17:27
-- Version du serveur : 10.5.21-MariaDB-0+deb11u1
-- Version de PHP : 8.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `demeerseman1`
--

-- --------------------------------------------------------

--
-- Structure de la table `OptionCategory`
--

CREATE TABLE `OptionCategory` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `OptionCategory`
--

INSERT INTO `OptionCategory` (`id`, `categoryName`) VALUES
(1, 'Sauce'),
(2, 'Ice');

-- --------------------------------------------------------

--
-- Structure de la table `Options`
--

CREATE TABLE `Options` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Options`
--

INSERT INTO `Options` (`id`, `name`, `category`) VALUES
(1, 'Sauce Verte', 1),
(2, 'Sauce BBQ', 1),
(3, 'Hot Sauce', 1),
(4, 'Sans Glaçon', 2),
(5, 'Glaçon', 2),
(11, 'Citron', 2);

-- --------------------------------------------------------

--
-- Structure de la table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(11) NOT NULL,
  `order_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`order_data`)),
  `status_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Orders`
--

INSERT INTO `Orders` (`id`, `order_data`, `status_id`) VALUES
(1, '{\"order_number\": \"12345\", \"customer_name\": \"John Doe\", \"product\": \"Widget\"}', 2);

-- --------------------------------------------------------

--
-- Structure de la table `OrderStatus`
--

CREATE TABLE `OrderStatus` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `OrderStatus`
--

INSERT INTO `OrderStatus` (`status_id`, `status_name`) VALUES
(1, 'En cours'),
(2, 'Disponible'),
(3, 'Retiré'),
(4, 'Supprimer');

-- --------------------------------------------------------

--
-- Structure de la table `Product`
--

CREATE TABLE `Product` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `category` int(11) NOT NULL,
  `image` text NOT NULL,
  `price` varchar(6) NOT NULL,
  `stock` int(11) NOT NULL,
  `option` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `Product`
--

INSERT INTO `Product` (`id`, `name`, `description`, `category`, `image`, `price`, `stock`, `option`) VALUES
(1, 'BIG deal', 'Grosse soirée qui s’annonce ?! On gères ça avec nos big tenders 320g au choix + 1 accompagnement + ta sauce + 1 boisson rien que pour toi.', 1, 'ItsarealBIGdeal.webp', '15,99', 1, 1),
(2, 'Wing Feast', 'Choisis 5 de nos wings les plus délicieux, un accompagnement, ta sauce et une boisson. Si tu kiffes l’épicé, choisis la version “flaming” !', 1, 'PepesWingFeast.webp', '11,99', 2, 1),
(3, 'Winner Burger', 'Choisis ton burger Pepe préféré, un accompagnement, une sauce et une boisson.', 1, 'WinnerBurgerDeal.webp', '17,99', 10, 1),
(4, 'Full House', 'À quoi bon choisir quand on peut avoir les deux ? Prends 2 fat tenders ET 3 ailes de poulet frit, marinées et assaisonnées d’épices de Pepe, le tout recouvert de cornichons croquants. Fais-toi plaisir, ajoute une sauce au choix.', 2, 'PepesFullHouse.webp', '8,99', 5, 1),
(5, 'Flaming wings ', 'Some like it hot! Si toi aussi, essaye nos 5 ailes de poulet frit spicy, chargées d’épices Pepe, le tout recouvert de jalapeños pour une touche extra ! Fais-toi plaisir, ajoute une sauce au choix.', 2, 'Flamingwings.webp', '9,99', 7, 1),
(6, 'OG Pepe Wings ', 'Lover de wings ? Prends 5 ailes de poulet frit big boy, assaisonnées de notre mélange d’épices Pepe servies avec des cornichons crunchy. Fais-toi plaisir, ajoute une sauce au choix.', 2, 'OGPepeWings.webp', '10,99', 10, 1),
(7, 'Pepe Burger ', 'Le tout puissant du burger de poulet frit croustillant, sublimé dans la marinade de Pepe. Enrobé d’épices, de cheddar, salade, pickles d’oignon rouge et recouvert de notre sauce mega secrète à découvrir et que tu kifferas !', 2, 'PepeBurger.webp', '12,99', 103, 1),
(8, 'The Hot One', 'C’est la flamme ultime du Pepe ! Spicy burger de poulet frit croustillant, servi avec du coleslaw frais, des cornichons et une sauce secrète qui déchire', 2, 'TheHotOne.webp', '10,99', 12, 1),
(9, 'Tater Tots', 'Petites bouchées frites de pomme de terre nappées au sel poulet de Pepe.', 4, 'Bite-sizeTaterTots.webp', '5,99', 15, 1),
(14, 'Salt Fries', 'Bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.', 4, 'ChickenSaltFries.webp', '4,99', 3, 1),
(15, 'Fried Corn', 'Loin du simple maïs frit… celui de Pepe est un délice absolu !', 4, 'PepesFriedCorn.webp', '3,49', 1, 1),
(16, 'Bière Deck', '', 3, 'BiereDeckDonohue.webp', '2,49', 0, 2),
(17, 'Coca Cola', '', 3, 'CocaCola.webp', '1,99', 5, 2),
(18, 'Tropico', '', 3, 'Tropico.webp', '1,99', 8, 2),
(19, 'Fuze Tea', '', 3, 'FuzeTea.webp', '1,99', 9, 2),
(20, 'Vittel', '', 3, 'Vittel.webp', '1,99', 6, 2),
(21, 'Coca Cola Zero ', '', 3, 'CocaColaZero.webp', '1,99', 11, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `OptionCategory`
--
ALTER TABLE `OptionCategory`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Options`
--
ALTER TABLE `Options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- Index pour la table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_id` (`status_id`);

--
-- Index pour la table `OrderStatus`
--
ALTER TABLE `OrderStatus`
  ADD PRIMARY KEY (`status_id`);

--
-- Index pour la table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`),
  ADD KEY `category_id` (`option`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `OptionCategory`
--
ALTER TABLE `OptionCategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Options`
--
ALTER TABLE `Options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `OrderStatus`
--
ALTER TABLE `OrderStatus`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Options`
--
ALTER TABLE `Options`
  ADD CONSTRAINT `Options_ibfk_1` FOREIGN KEY (`category`) REFERENCES `OptionCategory` (`id`);

--
-- Contraintes pour la table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `OrderStatus` (`status_id`);

--
-- Contraintes pour la table `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `Product_ibfk_1` FOREIGN KEY (`option`) REFERENCES `OptionCategory` (`id`),
  ADD CONSTRAINT `category` FOREIGN KEY (`category`) REFERENCES `Category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
