import React, { useState } from 'react';
import styles from './language-selector.module.css';
import { useTranslation } from 'react-i18next';
import {en, de} from '../languages/';


function LanguageRadio({checked, lang, onHandleClick}) {
	const handleOnClick = () => {
    	onHandleClick(lang.locale);
    }

    const handleOnChange = () => {
    	// is never called because input is hidden
    }

	return (
		<React.Fragment>
		<input onChange={handleOnChange} type="radio" name="language" value={lang.locale} checked={checked} />
    	<label onClick={handleOnClick}>
    		{lang.name}
    		<img className={styles.flagIcon} src={lang.icon} alt="language flag" />
		</label>
    	</React.Fragment>
	);
}


const LanguageSelector = ({ onLanguageSelect }) => {
    const [selectedLanguage, setInternalLangState] = useState(en.locale);
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (locale) => {
		setInternalLangState(locale);
    	i18n.changeLanguage(locale);
    }

    const handleFormSubmit = ev => {
        ev.preventDefault();
        onLanguageSelect(selectedLanguage);
    }

    return (
        <div className = { styles.box } >
        <form onSubmit={handleFormSubmit}>
        	<LanguageRadio onHandleClick={handleLanguageChange} lang={en} checked={selectedLanguage === en.locale} />
    		<LanguageRadio onHandleClick={handleLanguageChange} lang={de} checked={selectedLanguage === de.locale} />
    		<button className={styles.btn} type="submit">{t('Continue')}</button>
		</form> 
		</div>
    );
}

export default LanguageSelector;