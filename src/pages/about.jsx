import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'

import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout page="about">
            <h1>About me</h1>

            <p>Hi. I'm Brian Arthur.</p>
            <div className={styles.avatar}>
                <img 
                    src="/BrianArthurHeadshot.png" 
                    height={300} 
                    width={300}
                />
            </div>
            
            <p>
                I have completed my third year at Queen's University studying Mathematics and Engineering with an option in computing. 
                I'm always willing to learn new concepts and this program provides many opportunites with abstract measure and probability 
                theory, exploring engineering applications, while providing strong a computing foundation with courses including algorithms, 
                data structures, and database desgin. 
            </p>
            <p>
                My interests include full stack development, machine learning and AI. I have worked with the frontend framework React on several 
                projects and am now challenging myself to apply new methodologies to these projects with NextJS and Typescript. My backend development 
                experience includes PHP, SQL and my personal fav which was self taught is Python Django. I'm always looking for new 
                challenges and plan on learning mobile app development in the near future.
            </p>
            <p>
                My latest adventure has been diving headfirst into data analysis and machine learning through school clubs using Python tools including 
                Tensorflow, Scikit, Pandas and Numpy. I have strong technical skills in most projects I contribute to, however, during this project I 
                took on more responsibiliy becoming a team lead of a small group of students. Where I learned many valuable leadership skills to keep team 
                members passionate and engaged, while ensuring delivery of the project.
            </p>
            <p>
                In  my free time I enjoy being outdoors camping and hiking. I love getting active playing all sports ranging from 
                golf to hockey, as well as watching and being a fan of many sports including NHL hockey (Go Sens Go) and F1 racing.
            </p>
			
		</Layout>
	);
}
