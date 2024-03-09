import React from 'react';
import styles from './Cards.module.css';
import { motion } from 'framer-motion/dist/framer-motion'
export default function Location() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ type: 'string', opacity: 1, staggerChildren: 1, x: 0 }}
			transition={{ duration: 1 }}
			className={styles.googleMapContainer}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5085.636342534027!2d74.47840209749924!3d19.742389419184143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ0JzMyLjIiTiA3NMKwMjgnMzkuMiJF!5e0!3m2!1sen!2sin!4v1683710961434!5m2!1sen!2sin"
				width="100%"
				height="455"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</motion.div>
	);
}
