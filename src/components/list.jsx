import React from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';

const ExperienceTimeline = () => {
    const list = [
        {link: 'bell1', title: 'Bell Canada', description: 'Integration Specialist', startDate: 'May 2021', endDate: 'Present'}, 
        {link: 'bell2', title: 'Bell Canada', description: 'Technical Analyst', startDate: 'May 2020', endDate: 'Aug 2020'},
        {link: 'bell3', title: 'Bell Canada', description: 'Business Analyst', startDate: 'May 2019', endDate: 'Aug 2019'},
        {link: 'zetatango',title: 'ZetaTango', description: 'Quality Assurance Analyst', startDate: 'Jul 2018', endDate: 'Aug 2018'},
    ];

    return (
        <>
            {list.map((data, i) => <TimelineItem data={data} left={i % 2 === 0} lastItem={list.length === i + 1} />)}
        </>
    );
}


export const TimelineItem = ({ data, left=true, lastItem=false }) => {
    return (
        <Link href={`/work/${data.link}`}>
            <a className={left ? styles.card : styles.card + ' ' + styles.cardRight}>
                <div>
                    <div className={styles.cardItem}>
                        <div>
                            <h4 className={styles.cardItemTitle}>{data.title}</h4>
                            {data.description}
                        </div>
                        <div>
                            <h6 className={styles.cardItemDates}>{data.startDate}</h6>
                            <h6 className={styles.cardItemDates}>{data.endDate}</h6>
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