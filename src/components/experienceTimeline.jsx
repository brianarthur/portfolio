import React from 'react';
import Link from 'next/link';
import styles from '../styles/experience-timeline.module.css';
import { printDate } from '../lib/date';

const ExperienceTimeline = ({ work }) => {

    return (
        <>
            {work.map((data, i) => <TimelineItem key={data.id} data={data} left={i % 2 === 0} lastItem={work.length === i + 1} />)}
        </>
    );
}


export const TimelineItem = ({ data, left=true, lastItem=false }) => {
    return (
        <Link href={`/work/${data.id}`}>
            <a className={left ? styles.card : styles.card + ' ' + styles.cardRight}>
                <div>
                    <div className={styles.cardItem}>
                        <div>
                            <h4 className={styles.cardItemTitle}>{data.title}</h4>
                            <div className={styles.cardDescription}>{data.description}</div>
                        </div>
                        <div>
                            <h6 className={styles.cardItemDates}>{printDate(data.startDate)}</h6>
                            <h6 className={styles.cardItemDates}>{printDate(data.endDate)}</h6>
                        </div>
                    </div>
                    { !lastItem && 
                        <>
                            <div className={styles.vl} />
                            <div className={styles.hl} />
                        </>
                    }
                </div>
            </a>
        </Link>
    );
}

export default ExperienceTimeline;