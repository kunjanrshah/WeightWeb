-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2022 at 11:59 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weighing`
--

-- --------------------------------------------------------

--
-- Table structure for table `material`
--

CREATE TABLE `material` (
  `id` int(255) NOT NULL,
  `material_name` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `material`
--

INSERT INTO `material` (`id`, `material_name`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 'Plastic', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 19:11:47', '2022-03-14 10:16:55'),
(4, 'Steel', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:17:10', '2022-03-14 10:17:10'),
(5, 'Plastic123', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 00:52:48', '2022-03-21 00:52:48'),
(6, 'Plastic66', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-22 08:42:12', '2022-03-22 08:42:12'),
(7, 'Plastic667', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-22 08:45:37', '2022-03-22 08:45:37'),
(8, 'Plastic1', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 21:55:43', '2022-04-13 21:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `receiver`
--

CREATE TABLE `receiver` (
  `id` int(255) NOT NULL,
  `receiver_name` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `receiver`
--

INSERT INTO `receiver` (`id`, `receiver_name`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Pratik', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 19:16:20', '2022-03-14 10:16:07'),
(3, 'Satish', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:16:15', '2022-03-14 10:16:15'),
(4, 'Kunjan', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:30:01', '2022-03-14 10:30:01'),
(5, 'Pratik123', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 00:52:48', '2022-03-21 00:52:48'),
(6, 'Pratik1', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 21:55:43', '2022-04-13 21:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `remark`
--

CREATE TABLE `remark` (
  `id` int(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `remark`
--

INSERT INTO `remark` (`id`, `remark`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 'hello1', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 18:57:24', '2022-04-02 17:54:39'),
(3, 'werrt', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 18:57:31', '2022-03-04 18:57:31'),
(4, 'hello12', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 21:55:43', '2022-04-13 21:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`id`, `name`, `value`, `created_at`, `updated_at`) VALUES
(1, 'flag1', 'ACTIVE', '2022-03-16 23:21:52', '2022-04-14 00:58:16'),
(2, 'flag2', 'TARE-GROSS', '2022-03-16 23:21:52', '2022-04-14 00:38:28'),
(3, 'flag3', 'ACTIVE', '2022-03-16 23:23:55', '2022-04-13 23:23:05'),
(4, 'vehicle', 'Vehicle', '2022-03-27 21:04:45', '2022-04-15 14:53:35'),
(5, 'remark', 'Remark', '2022-03-27 21:04:45', '2022-04-15 14:53:42'),
(6, 'villege', 'Villege', '2022-03-27 21:04:45', '2022-04-15 14:54:00'),
(7, 'receiver', 'Receiver', '2022-03-27 21:04:45', '2022-04-15 14:54:10'),
(8, 'supplier', 'Supplier', '2022-03-27 21:04:45', '2022-04-15 14:54:22'),
(9, 'material', 'Material', '2022-03-27 21:04:45', '2022-04-15 14:54:29');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `id` int(255) NOT NULL,
  `supplier_name` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `supplier_name`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'LG', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 18:48:41', '2022-03-14 10:15:03'),
(2, 'Samsung', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 18:50:19', '2022-03-14 10:15:09'),
(3, 'LG123', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 00:52:48', '2022-03-21 00:52:48'),
(6, 'LG1', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 21:55:43', '2022-04-13 21:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `role` enum('USER','ADMIN') NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `role`, `email`, `password`, `phone`, `avatar`, `created_at`, `updated_at`) VALUES
('12fe0a84-b78f-43da-8c97-7260ef5091ec', 'kunjan', 'kunjan', 'USER', 'kunjan', 'kunjan@123', '9404804139', '', '2022-03-16 23:10:17', '2022-04-15 15:28:32'),
('643b7406-1fbf-4424-b582-12d265feb38e', 'saurabh', 'lende', 'USER', 'saurabh', 'saurabh', '9404804139', '', '2022-03-20 23:56:52', '2022-03-20 23:56:52'),
('6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', 'admin', 'admin', 'ADMIN', 'admin', 'admin@1234', '9404804139', '', '2022-02-27 17:40:55', '2022-04-15 15:25:26');

-- --------------------------------------------------------

--
-- Table structure for table `user_settings`
--

CREATE TABLE `user_settings` (
  `id` varchar(255) NOT NULL,
  `is_email_verified` tinyint(1) NOT NULL DEFAULT 0,
  `is_phone_verified` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_settings`
--

INSERT INTO `user_settings` (`id`, `is_email_verified`, `is_phone_verified`, `user_id`, `created_at`, `updated_at`) VALUES
('2', 0, 0, '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-02-27 17:40:55', '2022-02-27 17:40:55'),
('c723bb75-9668-40fe-a50e-365f5bf145bb', 0, 0, '643b7406-1fbf-4424-b582-12d265feb38e', '2022-03-20 23:56:52', '2022-03-20 23:56:52'),
('f4390c13-8d42-4712-8345-5ae6e38b5a88', 0, 0, '12fe0a84-b78f-43da-8c97-7260ef5091ec', '2022-03-16 23:10:17', '2022-03-16 23:10:17');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id` int(255) NOT NULL,
  `vehicle_number` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id`, `vehicle_number`, `user_id`, `created_at`, `updated_at`) VALUES
(27, 'MH17CR1310', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 18:14:21', '2022-03-14 10:14:41'),
(28, 'MH31CR1310', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-05 13:28:41', '2022-03-14 10:14:50'),
(29, 'MH17CR3434', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:29:40', '2022-03-14 10:29:40'),
(30, 'MH17CR2222', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-20 23:46:29', '2022-03-20 23:46:29'),
(31, 'MH17CR3333', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 00:15:14', '2022-03-21 00:15:14'),
(32, 'MH17CR3334', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 16:32:56', '2022-03-21 16:32:56'),
(33, 'MH17CR1355', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-22 08:42:12', '2022-03-22 08:42:12'),
(34, 'MH17CR5555', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-22 08:45:37', '2022-03-22 08:45:37'),
(36, 'MH17CR1312', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 21:55:43', '2022-04-13 21:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `villege`
--

CREATE TABLE `villege` (
  `id` int(255) NOT NULL,
  `villege_name` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `villege`
--

INSERT INTO `villege` (`id`, `villege_name`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Pune', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 18:41:06', '2022-03-14 10:15:15'),
(4, 'Chichwad', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-04 18:50:29', '2022-03-14 10:15:23'),
(6, 'Pune1', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 21:55:43', '2022-04-13 21:55:43');

-- --------------------------------------------------------

--
-- Table structure for table `weighing`
--

CREATE TABLE `weighing` (
  `id` int(255) NOT NULL,
  `charges` double NOT NULL,
  `payment_type` varchar(20) NOT NULL,
  `gross_weight` double DEFAULT NULL,
  `tare_weight` double DEFAULT NULL,
  `net_weight` double DEFAULT NULL,
  `vehicle_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `material_id` int(11) NOT NULL,
  `villege_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `remark_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `weighing`
--

INSERT INTO `weighing` (`id`, `charges`, `payment_type`, `gross_weight`, `tare_weight`, `net_weight`, `vehicle_id`, `supplier_id`, `material_id`, `villege_id`, `receiver_id`, `remark_id`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(3, 90, 'cash', 400, 18, 382, 28, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-13 23:44:48', '2022-03-28 07:02:19'),
(7, 123, 'credit', 100, 80, 20, 31, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 02:16:06', '2022-03-21 09:12:26'),
(8, 4556, 'cash', 29, 27, 2, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 02:17:33', '2022-03-21 10:58:48'),
(9, 30, 'cash', 27, 25, 2, 27, 2, 4, 4, 3, 3, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:20:43', '2022-03-21 10:59:23'),
(10, 400, 'cash', 23, 16, 7, 28, 2, 4, 4, 4, 3, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:38:43', '2022-03-14 10:39:18'),
(11, 200, 'cash', 4, 0, 4, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:49:07', '2022-03-27 20:35:36'),
(12, 0, 'cash', 20, 14, 6, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 10:49:14', '2022-03-27 20:48:42'),
(13, 0, 'cash', 24, 13, 11, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-14 23:15:19', '2022-04-13 22:47:05'),
(46, 600, 'cash', 300, 200, 100, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-15 01:37:10', '2022-03-15 01:37:10'),
(59, 23, 'cash', 27, 12, 15, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 11:04:22', '2022-03-21 11:05:31'),
(60, 0, 'cash', 15, 9, 6, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 11:06:11', '2022-03-21 11:06:44'),
(64, 0, 'cash', 26, 0, 26, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-21 16:34:21', '2022-03-21 16:34:21'),
(66, 0, 'cash', 15, 0, 15, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-03-22 08:44:05', '2022-03-22 08:44:05'),
(73, 0, 'cash', 17, 0, 17, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 22:35:38', '2022-04-13 22:35:38'),
(74, 0, 'cash', 0, 0, 0, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 22:37:15', '2022-04-13 22:37:15'),
(75, 0, 'cash', 28, 27, 1, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-13 22:39:14', '2022-04-13 22:45:41'),
(76, 0, 'cash', 12, 4, 8, 27, 1, 2, 1, 1, 2, 'completed', '643b7406-1fbf-4424-b582-12d265feb38e', '2022-04-13 23:30:33', '2022-04-13 23:35:18'),
(78, 0, 'cash', 19, 14, 5, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-14 00:56:42', '2022-04-14 00:58:02'),
(79, 0, 'cash', 26, 8, 18, 27, 1, 2, 1, 1, 2, 'completed', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-14 00:59:37', '2022-04-14 01:00:29'),
(91, 0, 'cash', 12, 0, 12, 27, 1, 2, 1, 1, 2, 'pending', '6db0af0a-e1a7-49c3-b00d-4efd47fdf14b', '2022-04-15 14:52:09', '2022-04-15 14:52:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `material_name` (`material_name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receiver`
--
ALTER TABLE `receiver`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `receiver_name` (`receiver_name`);

--
-- Indexes for table `remark`
--
ALTER TABLE `remark`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `remark` (`remark`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `supplier_name` (`supplier_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_settings`
--
ALTER TABLE `user_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_number` (`vehicle_number`);

--
-- Indexes for table `villege`
--
ALTER TABLE `villege`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `villege_name` (`villege_name`);

--
-- Indexes for table `weighing`
--
ALTER TABLE `weighing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `material_id` (`material_id`),
  ADD KEY `receiver_id` (`receiver_id`),
  ADD KEY `remark_id` (`remark_id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `vehicle_id` (`vehicle_id`),
  ADD KEY `villege_id` (`villege_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `material`
--
ALTER TABLE `material`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `receiver`
--
ALTER TABLE `receiver`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `remark`
--
ALTER TABLE `remark`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `villege`
--
ALTER TABLE `villege`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `weighing`
--
ALTER TABLE `weighing`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_settings`
--
ALTER TABLE `user_settings`
  ADD CONSTRAINT `user_settings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `weighing`
--
ALTER TABLE `weighing`
  ADD CONSTRAINT `weighing_ibfk_1` FOREIGN KEY (`material_id`) REFERENCES `material` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `weighing_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `receiver` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `weighing_ibfk_3` FOREIGN KEY (`remark_id`) REFERENCES `remark` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `weighing_ibfk_4` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `weighing_ibfk_5` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `weighing_ibfk_6` FOREIGN KEY (`villege_id`) REFERENCES `villege` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `weighing_ibfk_7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
