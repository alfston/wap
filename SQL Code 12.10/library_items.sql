-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: library
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `barcode` int NOT NULL,
  `ISBN` varchar(45) DEFAULT NULL,
  `lang` varchar(45) DEFAULT NULL,
  `format` varchar(45) DEFAULT NULL,
  `borrowed` date DEFAULT NULL,
  `loanPeriod` int DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `isOverDue` tinyint DEFAULT NULL,
  `due_date` varchar(255) DEFAULT NULL,
  `is_over_due` bit(1) DEFAULT NULL,
  `loan_period` int DEFAULT NULL,
  PRIMARY KEY (`barcode`),
  KEY `Item_Is_A_Book_idx` (`ISBN`),
  KEY `Format_is_an_enum_idx` (`format`),
  CONSTRAINT `Format_is_an_enum` FOREIGN KEY (`format`) REFERENCES `formats` (`format`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Item_Is_A_Book` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'1234','English','Paperback','2020-01-01',14,'2020-01-15',0,NULL,NULL,NULL),(2,'1234','English','Hardcover','2020-01-01',14,'2020-01-15',0,NULL,NULL,NULL),(3,'1234','English','Audiobook','2020-01-01',14,'2020-01-15',0,NULL,NULL,NULL),(4,'1234','French','Paperback','2020-01-01',10,'2020-01-15',0,NULL,NULL,NULL),(5,'2345','German','Hardcover','2020-12-01',14,'2020-12-15',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-10 17:59:14
