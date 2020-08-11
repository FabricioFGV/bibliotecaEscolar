CREATE DATABASE  IF NOT EXISTS `registrobiblioteca` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `registrobiblioteca`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: registrobiblioteca
-- ------------------------------------------------------
-- Server version	5.7.28-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumno` (
  `idAlumno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT 'N/A',
  `Grado` int(2) DEFAULT NULL,
  `Grupo` varchar(45) DEFAULT 'N/A',
  `idProgramaE` int(11) DEFAULT '1',
  PRIMARY KEY (`idAlumno`),
  UNIQUE KEY `idAlumno_UNIQUE` (`idAlumno`),
  KEY `idProgramaE_idx` (`idProgramaE`),
  CONSTRAINT `idProgramaE` FOREIGN KEY (`idProgramaE`) REFERENCES `programae` (`idProgramaE`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=180701 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES (160131,'Fabricio Guzmán Vite',5,'B',1),(160138,'Diana Evila',9,'A',1),(160320,'N/A',NULL,'N/A',1),(160500,'N/A',NULL,'N/A',1),(160509,'Luisa',3,'B',1),(160560,'N/A',NULL,'N/A',1),(160661,'N/A',NULL,'N/A',1),(180400,'N/A',NULL,'N/A',1),(180502,'N/A',NULL,'N/A',1),(180506,'',3,'A',1),(180520,'N/A',NULL,'N/A',1),(180610,'Fabricio Guzmán Vite',5,'B',1),(180700,'N/A',NULL,'N/A',1);
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bitacora` (
  `id_bitacora` int(11) NOT NULL AUTO_INCREMENT,
  `idProgramaE` int(11) DEFAULT NULL,
  `idAlumno` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `ejecutor` varchar(20) DEFAULT NULL,
  `actividad_realizada` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_bitacora`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacora`
--

LOCK TABLES `bitacora` WRITE;
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
INSERT INTO `bitacora` VALUES (4,NULL,180610,'2020-08-01 20:55:15','root@localhost','Se hicieron cambios');
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programae`
--

DROP TABLE IF EXISTS `programae`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programae` (
  `idProgramaE` int(11) NOT NULL AUTO_INCREMENT,
  `programaEducativo` varchar(90) NOT NULL,
  PRIMARY KEY (`idProgramaE`),
  UNIQUE KEY `matricula_UNIQUE` (`idProgramaE`),
  UNIQUE KEY `programaEducativo_UNIQUE` (`programaEducativo`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programae`
--

LOCK TABLES `programae` WRITE;
/*!40000 ALTER TABLE `programae` DISABLE KEYS */;
INSERT INTO `programae` VALUES (2,'Ing. Biotecnologia'),(3,'Ing. Desarrollo e Innovación Empresarial'),(4,'Ing. Mantenimiento Industrial'),(5,'Ing. Mecatronica'),(7,'Ing. Procesos Alimentarios'),(6,'Ing. Tecnologias de la Información y Comunición'),(8,'Lic. Gastronomia'),(10,'Lic. Gestión del Capital Humano'),(9,'Lic. Terapia Fisica'),(1,'N/A'),(11,'Tsu. Administración Área Capital Humano'),(12,'Tsu. Administración Área Recursos Humanos'),(13,'Tsu. Agricultura Sustentable y Protegida'),(14,'Tsu. Gastronomía'),(15,'Tsu. Mantenimiento Área Industrial'),(16,'Tsu. Mantenimiento Área Petróleo'),(17,'Tsu. Mecatronica Área Automatización'),(18,'Tsu. Proceso Alimentarios'),(19,'Tsu. Quimica Área Biotecnologia'),(21,'Tsu. Tecnologías de la Información Área Desarrollo de Software Multiplataforma'),(22,'Tsu. Tecnologías de la Información Área Entornos Virtuales y Negocios Digitales'),(20,'Tsu. Terapia Fisica');
/*!40000 ALTER TABLE `programae` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro`
--

DROP TABLE IF EXISTS `registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registro` (
  `idRegistro` int(6) NOT NULL AUTO_INCREMENT,
  `entrada` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Matricula` int(6) NOT NULL,
  `idMatricula` int(11) DEFAULT NULL,
  PRIMARY KEY (`idRegistro`),
  KEY `idMatricula_idx` (`idMatricula`),
  CONSTRAINT `idMatricula` FOREIGN KEY (`idMatricula`) REFERENCES `alumno` (`idAlumno`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro`
--

LOCK TABLES `registro` WRITE;
/*!40000 ALTER TABLE `registro` DISABLE KEYS */;
INSERT INTO `registro` VALUES (1,'2020-07-15 20:36:11',180610,180610),(2,'2020-07-16 17:57:35',180610,180610),(3,'2020-07-16 18:00:15',180610,180610),(4,'2020-07-16 18:01:01',180610,180610),(5,'2020-07-16 18:21:38',180610,180610),(6,'2020-07-16 18:32:35',180610,180610),(7,'2020-07-16 18:33:11',160131,160131),(8,'2020-07-16 18:33:42',160131,160131),(9,'2020-07-17 11:30:57',160131,160131),(10,'2020-07-31 20:01:12',180131,NULL),(16,'2020-08-01 21:06:07',180610,180610),(17,'2020-08-01 21:06:56',180610,180610),(23,'2020-08-02 21:23:13',180610,180610),(24,'2020-08-02 21:24:11',180610,180610),(25,'2020-08-02 21:26:01',180610,180610),(28,'2020-08-02 21:35:07',180610,180610),(29,'2020-08-04 20:22:26',180610,180610),(30,'2020-08-04 20:23:05',180610,180610),(31,'2020-08-04 20:23:13',180610,180610),(32,'2020-08-04 20:47:11',180610,180610),(33,'2020-08-04 21:28:17',180610,180610),(34,'2020-08-04 21:28:24',180610,180610),(35,'2020-08-04 23:48:36',180610,180610),(36,'2020-08-06 20:56:15',180610,180610),(37,'2020-08-06 20:56:24',180610,180610),(38,'2020-08-06 20:58:46',180610,180610),(43,'2020-08-07 08:48:03',180700,180700),(45,'2020-08-07 08:51:39',180400,180400),(48,'2020-08-07 09:02:42',160500,160500),(59,'2020-08-07 10:30:39',180520,180520),(60,'2020-08-07 10:46:29',180502,180502),(61,'2020-08-07 10:46:41',180610,180610),(62,'2020-08-07 10:48:05',180610,180610),(63,'2020-08-07 10:48:32',160560,160560),(64,'2020-08-07 10:48:47',160560,160560),(65,'2020-08-07 10:49:25',160320,160320),(66,'2020-08-07 10:54:38',180610,180610),(67,'2020-08-07 11:15:40',160320,160320),(68,'2020-08-07 12:01:09',180610,180610),(69,'2020-08-07 12:01:31',180610,180610),(70,'2020-08-07 12:11:51',180610,180610),(71,'2020-08-07 12:50:09',180610,180610),(72,'2020-08-07 12:59:35',180610,180610),(73,'2020-08-07 12:59:44',180610,180610),(74,'2020-08-07 13:00:16',180610,180610),(75,'2020-08-07 13:03:02',180610,180610),(76,'2020-08-07 13:03:58',180610,180610),(77,'2020-08-07 13:04:09',180610,180610),(78,'2020-08-07 13:04:55',180610,180610),(79,'2020-08-07 13:06:08',180610,180610),(80,'2020-08-07 13:06:11',180610,180610),(81,'2020-08-07 13:06:39',180610,180610),(82,'2020-08-07 13:15:15',180610,180610),(83,'2020-08-07 13:15:19',180610,180610),(84,'2020-08-07 13:19:23',180610,180610),(85,'2020-08-07 13:19:26',180610,180610),(86,'2020-08-07 13:19:29',180610,180610),(87,'2020-08-07 13:19:38',180610,180610),(88,'2020-08-07 13:20:15',180610,180610),(89,'2020-08-07 13:30:49',180610,180610),(90,'2020-08-07 13:30:57',180610,180610),(91,'2020-08-07 13:30:58',180610,180610),(92,'2020-08-10 12:00:37',180610,180610);
/*!40000 ALTER TABLE `registro` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `registrobiblioteca`.`registro_AFTER_INSERT` AFTER INSERT ON `registro` FOR EACH ROW
BEGIN

insert ignore into alumno(idAlumno) values (NEW.Matricula);

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-11 13:57:19
