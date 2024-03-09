import { useFormik } from 'formik';
import React, { useRef } from 'react';
import Location from './Location';
import Cards from './Cards';
import Form from './Form';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import { TfiLinkedin } from 'react-icons/tfi';
import { TbBrandTelegram } from 'react-icons/tb'
import styles from './Cards.module.css';
import { motion } from 'framer-motion/dist/framer-motion'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MeshLambertMaterial, PlaneGeometry, TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei'
import ImagesEarth from '../images/Solarsystemscope_texture_8k_jupiter.jpg'
const initialValues = {
	name: '',
	subject: '',
	message: '',
	email: '',
	phone: ''
};

const validate = (values) => {
	let errors = {};
	if (!values.name) {
		errors.name = 'Name field is required';
	} else if (/^\d*$/.test(values.name)) {
		errors.name = 'Invalid input';
	}
	if (!values.email) {
		errors.email = 'Email field is required';
	}

	if (!values.phone) {
		errors.phone = 'Enter phone number';
	}
	if (values.phone.length > 10 || values.phone.length < 10) {
		errors.phone = 'Please enter valid phone number';
	}
	if (!values.message) {
		errors.message = 'Enter Message';
	}
	if (!values.subject) {
		errors.subject = 'Enter Subject';
	}
	return errors;
};

const onSubmit = (values) => {
	console.log('fortm values', values);
};
const RotatioOfBowlv = () => {
	const { camera, mouse } = useThree()
	const myMesh = useRef();
	const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [ImagesEarth, ImagesEarth, ImagesEarth, ImagesEarth])
	useFrame(({ clock }) => {
		// myMesh.current.rotation.x = mouse.x; 
		// myMesh.current.rotation.y = mouse.y;
		// myMesh.current.rotation.x = clock.getElapsedTime();
		// myMesh.current.rotation.y = clock.getElapsedTime();
	})
	// return <pointLight position={[10, 10, 10]} />
	return <>
		{/* <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} /> */}
		<mesh ref={myMesh} >
			<ambientLight position={[0, 2, 0]} scale={1} />
			<orthographicCamera />
			<sphereGeometry attach={'geometry'} args={[3, 32, 32]} />
			<meshPhongMaterial specularMap={specularMap} />
			<meshStandardMaterial map={colorMap} normalMap={normalMap} />
			<OrbitControls
				enableZoom={false}
				enablePan={true}
				enableRotate={true}
				// zoomSpeed={0.6}
				panSpeed={0.5}
				rotateSpeed={0.4} />

		</mesh>
		{/* // </Canvas > */}
	</>
}
const Plane = () => {
	return <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
		{/* <Stars /> */}
		<planeBufferGeometry position={[0, 0, 0]} args={[100, 100]} />
		<meshStandardMaterial attach="material" />

	</mesh>
}
export default function Contact() {
	const formik = useFormik({
		initialValues: initialValues,
		validate: validate,
		onSubmit: onSubmit
	});

	return (
		<div>
			<motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={styles.allCardContainer}>
				<Cards
					icon={TfiLinkedin}
					title={'LinkedIn'}
					link={'https://www.google.com/'}
					body={'Contact me on LinkedIn'}
				/>
				<Cards
					icon={MdOutlineMailOutline}
					title={'Email'}
					link={'https://www.google.com/'}
					body={'contact with Email'}
				/>
				<Cards
					icon={FiMessageSquare}
					title={'Message'}
					link={'https://www.google.com/'}
					body={'Contact me on message'}
				/>
			</motion.div>

			{/* <div>
				<Location />
			</div> */}
			<div style={{ width: '100%', height: '500px' }}>
				<Canvas>
					{/* <Plane /> */}
					<RotatioOfBowlv />
					<spotLight position={[10, 10, 15]} angle={0.3} />
				</Canvas>
			</div>
			{/* <section className={styles.animation}>
				<TbBrandTelegram className={styles.paperPlane} />
			</section> */}
			<div className={styles.mainOfFormAndMap}>
				<div><div>
					<section>
						{/* <img src={} alt='scroll' width={'100px'} height={'100px'} style={{ backgroundColor: 'transparent' }} /> */}
					</section>
				</div></div>
				<div> <Form formik={formik} /></div>
			</div>
			<div className={styles.locationContainer}>
				<Location />
			</div>
		</div>
	);
}
