import React from 'react';
import './header.css';
import Logo from '../logo/Logo.jsx';
import { Button } from "antd";
import { TranslationOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';

const Header = () => {
    
    const { changeLocale, locale } = useTranslation();


    return (    
        <header>
            <Logo />
            <div className='nombreApp'>
                <h1>csv2QR</h1>
            </div>
            <div id='traslationIcon'>
                <Button icon={<GlobalOutlined />} size='small' onClick={() => (locale == 'en' ? changeLocale('es') : changeLocale('en'))} >
                    {locale}
                </Button>
            </div>
        </header>
    )
}

export default Header