import React from 'react';
import './footer.css';
import { LinkedinOutlined , GithubFilled} from '@ant-design/icons';
import { useTranslation } from '../idiomaContext/idiomaContext.jsx';

const Footer = () => {
    const { t } = useTranslation()

    return (
        <>
            <footer>
                <p>{t("author")}</p>
                <div className='socialMediaIcons'>
                    <a href="https://www.linkedin.com/in/manuel-sabini/" target="_blank">
                        <LinkedinOutlined id='iconLinkedin'/>
                    </a>
                    <a href="https://github.com/ManuelSabini/qr-web-app" target="_blank">   
                        <GithubFilled id='iconGithub'/>
                    </a>                    
                </div>
            </footer>
        </>
    )
}

export default Footer