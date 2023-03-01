-- MySQL dump 10.13  Distrib 8.0.32, for macos12.6 (arm64)
--
-- Host: localhost    Database: mvp_app
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_data`
--

DROP TABLE IF EXISTS `app_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_data` (
  `game_type` varchar(100) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `start_game_data` varchar(300) DEFAULT NULL,
  `solution_data` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_data`
--

LOCK TABLES `app_data` WRITE;
/*!40000 ALTER TABLE `app_data` DISABLE KEYS */;
INSERT INTO `app_data` VALUES ('mini-sudoku',1,'[[5,0,6,1,0,4,],[0,0,0,0,5,0,],[0,6,0,0,0,2,],[0,1,4,0,0,0,],[2,0,0,5,0,0,],[0,0,3,0,0,0,],]','[[5,0,6,1,0,4,],[0,0,0,0,5,0,],[0,6,0,0,0,2,],[0,1,4,0,0,0,], [2,0,0,5,0,0,],[0,0,3,0,0,0,],]'),('mini-sudoku',2,'[[0,0,4,6,0,0],[4,2,0,0,5,0],[0,0,0,0,1,0],[0,4,6,3,0,0],[0,3,0,0,0,0],[2,0,5,0,6,0]]','[[1,5,4,6,3,2],[4,2,3,1,5,6],[3,6,2,5,1,4],[5,4,6,3,2,1],[6,3,1,2,4,5],[2,1,5,4,6,3]]'),('mini-sudoku',3,'[[0,0,0,4,0,0],[0,0,0,6,0,1],[1,6,5,0,4,0],[2,0,0,5,0,4],[6,5,0,1,0,2],[0,0,0,0,0,5]]}','[[3,2,1,4,5,6],[5,4,3,6,2,1],[1,6,5,2,4,3],[2,3,6,5,1,4],[6,5,4,1,3,2],[4,1,2,3,6,5]]');
/*!40000 ALTER TABLE `app_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_game_data`
--

DROP TABLE IF EXISTS `user_game_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_game_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `user_key` int NOT NULL,
  `game_type` varchar(100) DEFAULT NULL,
  `game_id` int NOT NULL,
  `game_data` varchar(300) DEFAULT NULL,
  `started_game` varchar(100) DEFAULT NULL,
  `completed_game` varchar(100) DEFAULT NULL,
  `time_save` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_game_data`
--

LOCK TABLES `user_game_data` WRITE;
/*!40000 ALTER TABLE `user_game_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_game_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'guest user 1','unknown'),(2,'Merhermblur',NULL),(3,'Sara',NULL),(4,'candyCaneJoe',NULL),(5,'slideyBob',NULL),(7,'bob',NULL),(8,'bramble',NULL),(9,'boopgoop',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 11:12:48
