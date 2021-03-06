import React from 'react';
import Link from 'next/link';
import styles from '../styles/post.module.css';
import Dates from './Dates';

const Post = ({ data }) => {
    return (
        <div className={styles.container}>
            <article>
                <div className={styles.title}>
                    <h2>{data.title}</h2>
                    <h5><Dates startDate={data.startDate} endDate={data.endDate} /></h5>
                </div>
                <div className={styles.description}>
                    <h4>{data.description}</h4>
                </div>
				<hr />
				<div 
                    className={styles.markdownContent} 
                    dangerouslySetInnerHTML={{ __html: data.contentHtml }} 
                />
			</article>
        </div>
    )
}

export default Post;