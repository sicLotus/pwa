import React, { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";

const withInitialSetupScreen = Component => props => {
    const [language, setLanguage] = useState(localStorage.getItem("language"));

    const handleLanguageSelection = language => {
        setLanguage(language);
        localStorage.setItem("language", language);
    };

    return language ? (
        <Component {...props} />
    ) : (
        <LanguageSelector onLanguageSelect={handleLanguageSelection} />
    );
}

export default withInitialSetupScreen;