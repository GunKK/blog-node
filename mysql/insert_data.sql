-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for blog_node
CREATE DATABASE IF NOT EXISTS `blog_node` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `blog_node`;

-- Dumping structure for table blog_node.comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` text DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `post_id` bigint(20) NOT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_comments_users` (`user_id`),
  KEY `FK_comments_posts` (`post_id`) USING BTREE,
  KEY `FK_comments_comments` (`parent_id`),
  CONSTRAINT `FK_comments_comments` FOREIGN KEY (`parent_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comments_posts` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comments_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table blog_node.comments: ~10 rows (approximately)
INSERT INTO `comments` (`id`, `title`, `content`, `user_id`, `post_id`, `parent_id`, `created_at`, `updated_at`) VALUES
	(1, 'cmt1', 'nice!!!!!', 21, 2, NULL, '2023-07-22 12:33:40', '2023-07-22 13:59:12'),
	(2, 'cm2', 'ruby vs php ?', 23, 2, NULL, '2023-07-22 12:55:59', '2023-07-22 12:55:59'),
	(4, 'bài viết khá bổ ích', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit. Enim sed faucibus turpis in. Malesuada fames ac turpis egestas integer eget. Tristique senectus et netus et malesuada fames. Enim praesent elementum facilisis leo vel fringilla est. At varius vel pharetra vel turpis nunc. Ornare lectus sit amet est placerat in egestas erat imperdiet. Quam elementum pulvinar etiam non quam. Posuere lorem ipsum dolor sit amet consectetur. Orci nulla pellentesque dignissim enim sit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mattis aliquam faucibus purus in massa tempor nec feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. In dictum non consectetur a erat. Turpis massa tincidunt dui ut ornare. Ligula ullamcorper malesuada proin libero nunc consequat. Id diam vel quam elementum pulvinar etiam non quam. Arcu vitae elementum curabitur vitae nunc.', 21, 2, NULL, '2023-07-25 09:15:14', '2023-07-25 09:15:14'),
	(5, 'Ruby có phải framework tốt nhất 2023', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit. Enim sed faucibus turpis in. Malesuada fames ac turpis egestas integer eget. Tristique senectus et netus et malesuada fames. Enim praesent elementum facilisis leo vel fringilla est. At varius vel pharetra vel turpis nunc. Ornare lectus sit amet est placerat in egestas erat imperdiet. Quam elementum pulvinar etiam non quam. Posuere lorem ipsum dolor sit amet consectetur. Orci nulla pellentesque dignissim enim sit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mattis aliquam faucibus purus in massa tempor nec feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. In dictum non consectetur a erat. Turpis massa tincidunt dui ut ornare. Ligula ullamcorper malesuada proin libero nunc consequat. Id diam vel quam elementum pulvinar etiam non quam. Arcu vitae elementum curabitur vitae nunc.', 23, 2, 2, '2023-07-25 09:27:54', '2023-07-25 09:27:54'),
	(6, 'Bạn nghĩ sao về Golang', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit. Enim sed faucibus turpis in. Malesuada fames ac turpis egestas integer eget. Tristique senectus et netus et malesuada fames. Enim praesent elementum facilisis leo vel fringilla est. At varius vel pharetra vel turpis nunc. Ornare lectus sit amet est placerat in egestas erat imperdiet. Quam elementum pulvinar etiam non quam. Posuere lorem ipsum dolor sit amet consectetur. Orci nulla pellentesque dignissim enim sit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mattis aliquam faucibus purus in massa tempor nec feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. In dictum non consectetur a erat. Turpis massa tincidunt dui ut ornare. Ligula ullamcorper malesuada proin libero nunc consequat. Id diam vel quam elementum pulvinar etiam non quam. Arcu vitae elementum curabitur vitae nunc.', 23, 2, 2, '2023-07-25 09:28:35', '2023-07-25 09:28:35'),
	(7, 'Ruby tốt cho người mới bắt đầu', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit. Enim sed faucibus turpis in. Malesuada fames ac turpis egestas integer eget. Tristique senectus et netus et malesuada fames. Enim praesent elementum facilisis leo vel fringilla est. At varius vel pharetra vel turpis nunc. Ornare lectus sit amet est placerat in egestas erat imperdiet. Quam elementum pulvinar etiam non quam. Posuere lorem ipsum dolor sit amet consectetur. Orci nulla pellentesque dignissim enim sit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mattis aliquam faucibus purus in massa tempor nec feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. In dictum non consectetur a erat. Turpis massa tincidunt dui ut ornare. Ligula ullamcorper malesuada proin libero nunc consequat. Id diam vel quam elementum pulvinar etiam non quam. Arcu vitae elementum curabitur vitae nunc.', 21, 2, 2, '2023-07-25 09:29:39', '2023-07-25 09:29:40'),
	(8, 'thanks', 'Cảm ơn bạn', 21, 2, 1, '2023-07-25 09:36:20', '2023-07-25 09:36:21'),
	(9, 'Nice', 'Trải nghiệm tốt, đồ họa đẹp', 21, 4, NULL, '2023-07-26 03:25:43', '2023-07-26 03:25:43'),
	(10, 'Lỗi SQL', 'Query select * from users not working on MongoDB', 21, 4, 9, '2023-07-26 03:29:16', '2023-07-26 03:29:16'),
	(14, 'fix', 'Try users.find({})', 21, 4, 10, '2023-07-26 03:38:31', '2023-07-26 03:38:31');

-- Dumping structure for table blog_node.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_posts_users` (`user_id`),
  CONSTRAINT `FK_posts_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table blog_node.posts: ~8 rows (approximately)
INSERT INTO `posts` (`id`, `name`, `description`, `user_id`, `created_at`, `updated_at`) VALUES
	(2, 'Ruby ngôn ngữ lập trình web ', 'In dui nulla, mattis ut convallis nec, laoreet nec est. Cras ultrices, arcu a pretium bibendum, nunc justo tempus nulla, et pulvinar est ante at purus. Curabitur pharetra ac lacus pulvinar pellentesque. In at urna at orci ullamcorper aliquam semper at nulla. Donec tempus porttitor diam, quis blandit dolor lobortis eu. Pellentesque risus neque, pulvinar a blandit quis, efficitur eu augue. Fusce nec efficitur tortor. Praesent iaculis vehicula auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eget lorem eu massa facilisis placerat non venenatis lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tincidunt fermentum.', 21, '2023-07-20 01:54:00', '2023-07-22 08:29:58'),
	(3, 'Java ngôn ngữ thuần hướng đối tượng', 'Donec iaculis metus in magna commodo, eleifend tempor sapien vulputate. Etiam consectetur luctus nisi. Etiam eu interdum ligula. Quisque ac ante imperdiet, viverra orci eu, semper urna. Sed imperdiet sapien quam, et viverra sem cursus nec. Pellentesque dictum mauris quis molestie tempus. In elementum in metus vel consequat. Curabitur eu fermentum mi. Vivamus luctus volutpat lacus posuere posuere. Maecenas venenatis sit amet nisi eget maximus. Curabitur gravida sem est, non vehicula enim ullamcorper ut. Donec lacinia, metus a scelerisque mattis, ante purus mollis ante, id tincidunt metus ante eget nisi.', 21, '2023-07-20 03:22:42', '2023-07-20 03:22:43'),
	(4, 'bài đăng 1', '1', 21, '2023-07-21 15:33:14', '2023-07-21 15:33:15'),
	(5, 'Giới thiệu ngôn ngữ lập trình GoLang', 'Go là một ngôn ngữ lập trình được thiết kế dựa trên tư duy lập trình hệ thống. Go được phát triển bởi Robert Griesemer, Rob Pike và Ken Thompson tại Google vào năm 2007. Điểm mạnh của Go là bộ thu gom rác và hỗ trợ lập trình đồng thời (tương tự như đa luồng – multithreading). Go là một ngôn ngữ biên dịch như C/C++, Java, Pascal… Go được giới thiệu vào năm 2009 và được sử dụng hầu hết trong các sản phẩm của Google.', 21, '2023-07-21 15:33:14', '2023-07-21 15:33:16'),
	(6, 'Bài đăng 9', '123', 21, '2023-07-21 15:33:32', '2023-07-21 15:33:31'),
	(7, 'Bài đăng 10', 'ras purus tellus, sodales bibendum iaculis eget, sagittis ut mi. Donec scelerisque in metus mollis vehicula. Mauris sed velit non purus euismod congue at quis eros. Cras consequat lorem tristique quam commodo, sagittis tristique elit maximus. Aenean sapien enim, lacinia in cursus sit amet, condimentum in nisl. Fusce pharetra lectus lorem. Vivamus non felis nulla. Morbi condimentum leo ante, quis molestie orci accumsan et. Sed placerat, nisi vel ultrices sagittis, diam tortor consectetur nunc, eget sagittis nunc nisi quis neque. Morbi condimentum pulvinar massa vitae mattis. Nam consequat felis id quam sollicitudin feugiat. Praesent nec gravida arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ipsum erat, sodales sed leo a, hendrerit tincidunt arcu.', 21, '2023-07-21 15:36:11', '2023-07-21 15:36:11'),
	(8, 'PHP 123', 'PHP 123', 21, '2023-07-21 15:51:26', '2023-07-21 15:51:26'),
	(9, 'Bài đăng 11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra leo sit amet orci blandit porta. Proin commodo metus dapibus aliquet tincidunt. Pellentesque a orci nec dolor dictum convallis ut sed dolor. Praesent iaculis magna vel ex condimentum molestie. Nulla vestibulum, purus at faucibus posuere, elit arcu sodales lacus, vel laoreet risus purus ut felis. Maecenas mauris lectus, pellentesque in gravida eget, hendrerit posuere turpis. Phasellus vel efficitur risus.', 21, '2023-07-22 01:45:22', '2023-07-22 01:45:22'),
	(10, 'Laravel ', 'Giới thiệu mô hình MVC trong Laravel', 21, '2023-07-22 09:52:21', '2023-07-22 09:52:21');

-- Dumping structure for table blog_node.post_images
CREATE TABLE IF NOT EXISTS `post_images` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) NOT NULL,
  `path` varchar(50) NOT NULL,
  `primary` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__posts` (`post_id`),
  CONSTRAINT `FK__posts` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table blog_node.post_images: ~0 rows (approximately)

-- Dumping structure for table blog_node.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `role` int(11) NOT NULL DEFAULT 2,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table blog_node.users: ~3 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
	(21, 'Nguyen Hau update', 'hau.nguyenbk8786@gmail.com', '$2b$10$t8l9gvWw3BZnkIZlFFVXyuHBPgCmEY9LRnQOihDepWdm5qJQkMuOi', 2, '2023-07-22 08:30:17', '2023-07-22 08:31:29'),
	(22, 'Admin', 'admin@gmail.com', '$2b$10$1eU/2.uefcU/XU97N5sRKeiHPSPDg97frQMtDIakFj5Za0ssqi/gC', 1, '2023-07-22 08:30:22', '2023-07-22 08:30:21'),
	(23, 'Nguyễn Văn Nam', 'nam.nguyenbk@gmail.com', '$2b$10$w/3j9HJJUbFt4Su4FRe/7.zQRNP51UjdKQ6KUlx3ot4csWypp/jnu', 2, '2023-07-22 08:30:22', '2023-07-22 08:30:25'),
	(24, 'Võ Văn Nam', 'nam.vobk0704@gmail.com', '$2b$10$kjMlu3w9NitpIkZxoUATtOEvQ3meKJghCBnpf4Ek3c4VfHPXf/PuK', 2, '2023-07-22 08:30:23', '2023-07-22 08:30:25'),
	(25, 'Hau123', 'hau.nguyenbk191@gmail.com', '$2b$10$m26UXs4Bu/UHHAeFwaiyM.yEOYGf8xHfUTRzKjiJwhvcys26M9saS', 2, '2023-07-22 08:30:24', '2023-07-22 08:30:26');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
