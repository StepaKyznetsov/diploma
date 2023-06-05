import React from 'react';
import css from './AboutProject.module.scss';

const AboutProject: React.FC = () => {
    return (
        <div className={css.container}>
            <img src="/images/authorsTop.PNG" alt="authorsTop" />
            <img src="/images/authorsBottom.PNG" alt="authorsBottom" />
        </div>
    )
}

export default AboutProject;