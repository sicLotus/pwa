import React, { useState } from 'react';
// import logo from './logo.svg';
import styles from './language-selector.module.css';
import { useTranslation } from 'react-i18next';


const LanguageSelector = ({ onLanguageSelect }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const { t, i18n } = useTranslation();

    const handleLanguageChange = ev => {
    	const lang = ev.target.value;
    	setSelectedLanguage(lang);
    	i18n.changeLanguage(lang);
    }

    const handleFormSubmit = ev => {
        ev.preventDefault();
        onLanguageSelect(selectedLanguage);
    }

    return (

        <div className = { styles.box } >
        <form onSubmit={handleFormSubmit}>
    			<div><label><input onChange={handleLanguageChange} type="radio" name="language" value="en" checked={selectedLanguage === "en"} />English</label></div>
    			<div><label><input onChange={handleLanguageChange} type="radio" name="language" value="de" checked={selectedLanguage === "de"}/>Deutsch</label></div>
    			<button type="submit">{t('Continue')}</button>
    		</form> </div>
    );
}

export default LanguageSelector;