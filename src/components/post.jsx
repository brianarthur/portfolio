import React from 'react';
import Link from 'next/link';
import styles from '../styles/post.module.css';
import { printDate } from '../lib/date';

const Post = ({ data }) => {
    return (
        <div className={styles.container}>
            <article>
                <div className={styles.title}>
                    <h2>{data.title}</h2>
                    <h5>{printDate(data.startDate)} - {printDate(data.endDate)}</h5>
                </div>
                <div className={styles.description}>
                    <h4>{data.description}</h4>
                </div>
				<hr />
				<div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
			</article>
        </div>
    )
}

export default Post;