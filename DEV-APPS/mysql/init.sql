-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dev_teams_meetings
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `dev_meetings`
--

DROP TABLE IF EXISTS `dev_meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dev_meetings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_id` int NOT NULL,
  `start_meeting` datetime DEFAULT NULL,
  `end_meeting` datetime DEFAULT NULL,
  `meeting_description` varchar(45) DEFAULT NULL,
  `meeting_date` date DEFAULT NULL,
  `meeting_location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dev_meetings`
--

LOCK TABLES `dev_meetings` WRITE;
/*!40000 ALTER TABLE `dev_meetings` DISABLE KEYS */;
INSERT INTO `dev_meetings` VALUES (1,3,'2038-01-19 03:14:07','2038-01-19 03:14:08','bla bla bla','2038-01-19','moon'),(2,2,'2038-01-19 03:14:09','2038-01-19 03:14:10','blo blo blo ','2038-01-19','sun'),(3,2,'2038-01-19 03:15:09','2038-01-19 03:16:09','hahaha','2038-01-19','jupiter'),(4,3,'2038-01-19 00:00:00','2038-01-19 00:00:00','bla bla bla','2038-01-18','tel aviv'),(6,3,'2038-01-19 03:14:07','2038-01-19 03:14:07','dsdfsf','2038-01-19','sdfsdfsd'),(7,1,'2038-01-19 03:14:07','2038-01-19 03:14:07','dsdfsdfsdfsdfsdf','2038-01-19','fafafaf'),(8,1,'2022-07-14 00:00:00','2022-07-28 00:00:00','cggcgn','2022-01-01','fghgfhf'),(9,2,'2012-12-12 00:00:00','2012-12-12 00:00:00','fsdfsdf','2022-07-21','dfsdfsdf');
/*!40000 ALTER TABLE `dev_meetings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dev_teams`
--

DROP TABLE IF EXISTS `dev_teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dev_teams` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(45) NOT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dev_teams`
--

LOCK TABLES `dev_teams` WRITE;
/*!40000 ALTER TABLE `dev_teams` DISABLE KEYS */;
INSERT INTO `dev_teams` VALUES (1,'React Team'),(2,'Mobile Team'),(3,'Ui Team'),(4,'Next Js Team');
/*!40000 ALTER TABLE `dev_teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-11 22:20:56
