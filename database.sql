-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 04 jan. 2021 à 10:58
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mproject`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonnement`
--

DROP TABLE IF EXISTS `abonnement`;
CREATE TABLE IF NOT EXISTS `abonnement` (
  `id_abonnement` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id d''abonnement',
  `debut_abonnement` date NOT NULL COMMENT 'debut de l''abonnement',
  `fin_abonnement` date NOT NULL COMMENT 'fin de l''abonnement',
  PRIMARY KEY (`id_abonnement`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id_Achat` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id de l''achat',
  `cartNumber` int(10) NOT NULL COMMENT 'numero de carte',
  `month` int(10) NOT NULL COMMENT 'mois de la carte',
  `year` date NOT NULL COMMENT ' année d''expiration',
  `cvc` int(11) NOT NULL COMMENT 'chiffre crypté',
  PRIMARY KEY (`id_Achat`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `date_create` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `type`, `date_create`) VALUES
(1, 'Administrateur', '2021-01-04'),
(2, 'Tuteur', '2021-01-04'),
(3, 'child', '2021-01-04');

-- --------------------------------------------------------

--
-- Structure de la table `songs`
--

DROP TABLE IF EXISTS `songs`;
CREATE TABLE IF NOT EXISTS `songs` (
  `id_song` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id du son',
  `name` varchar(100) NOT NULL COMMENT 'nom du son',
  `url` varchar(255) NOT NULL COMMENT 'url du son',
  `cover` varchar(100) NOT NULL COMMENT 'cover du son',
  `time` varchar(100) NOT NULL COMMENT 'temps du son',
  `type` varchar(100) NOT NULL COMMENT 'type de son',
  PRIMARY KEY (`id_song`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(40) NOT NULL,
  `lastname` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sexe` varchar(30) NOT NULL,
  `role_id` int(10) NOT NULL,
  `date_naissance` date NOT NULL,
  `createdAt` date NOT NULL,
  `updateAt` date NOT NULL,
  `subscription` varchar(40) NOT NULL,
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
