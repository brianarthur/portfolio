import React from 'react';
import Link from 'next/link';
import Dates from './Dates';
import styles from '../styles/list.module.css';


const ProjectList = ({ projects }) => {
    return (
        <>
            {projects.map(data => <ListItem data={data} key={data.id} />)}
        </>
    );
}

const ListItem = ({ data }) => {
    return (
        <Link href={`/projects/${data.id}`}>
            <a className={styles.listItem}>
                <div className={styles.listContent}>
                    <div className={styles.listTitleContent}>
                        <div className={styles.listTitleIcon}>
                            <img src={data.icon} width={50} height={50} />
                        </div>
                        <div>
                            <h4 className={styles.listItemTitle}>{data.title}</h4>
                            <div className={styles.listDescription}>{data.description}</div>
                        </div>
                    </div>
                    <div>
                        <h6 className={styles.cardItemDates}>
                            <Dates startDate={data.startDate} endDate={data.endDate} />
                        </h6>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default ProjectList;