import React from 'react'
import { Collapse } from "antd";
import './facs.css'
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';


const Facs = () => {
    const { t, locale } = useTranslation()

    const items = [
        {
            key: '1',
            label: <p>{t('question1')}</p>,
            children: <p>{t('response1')}</p>,
        },
        {
            key: '2',
            label: <p>{t('question2')}</p>,
            children: <p>{t('response2')}</p>,
        },
        {
            key: '3',
            label: <p>{t('question3')}</p>,
            children: <p>{t('response3')}</p>,
        },
        {
            key: '4',
            label: <p>{t('question4')}</p>,
            children: <p>{t('response4')}</p>,
        },
        {
            key: '5',
            label: <p>{t('question5')}</p>,
            children: <p>{t('response5')}</p>,
        },
    ];

    return (
        <section className='facsSection'>
            <div className='factSectionTitle'><h2>{t('factSectionTitle')}</h2></div>
            <Collapse items={items} defaultActiveKey={[]} />
        </section>
    );
};

export default Facs