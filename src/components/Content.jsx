import { useState, useEffect } from 'react';
import Career from './Career';
import Learning from './Learning';
import Philosophy from './Philosophy';
import Contact from './Contact';
import styles from './Content.module.css'

export default function Content() {
    // Initialize state with value from localStorage or a default value
    const [activeComponent, setActiveComponent] = useState(() => {
        const saved = window.localStorage.getItem("activeComponent");
        return saved ? JSON.parse(saved) : "Career";
    });

    useEffect(() => {
        // Set the active component state when the component mounts
        const saved = window.localStorage.getItem('activeComponent');
        if (saved) {
            setActiveComponent(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        // Update localStorage whenever activeComponent state changes
        if (activeComponent !== null) {
            window.localStorage.setItem('activeComponent', JSON.stringify(activeComponent));
        }
    }, [activeComponent]);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Career':
                return <Career />;
            case 'Learning':
                return <Learning />;
            case 'Philosophy':
                return <Philosophy />;
            case 'Contact':
                return <Contact />;
            default:
                return <Career />;
        }
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <button
                    className={activeComponent === 'Career' ? 'active' : ''}
                    onClick={() => setActiveComponent('Career')}>Career</button>
                <button
                    className={activeComponent === 'Learning' ? 'active' : ''}
                    onClick={() => setActiveComponent('Learning')}>Learning</button>
                <button
                    className={activeComponent === 'Philosophy' ? 'active' : ''}
                    onClick={() => setActiveComponent('Philosophy')}>Philosphy</button>
                <button
                    className={activeComponent === 'Contact' ? 'active' : ''}
                    onClick={() => setActiveComponent('Contact')}>CV/Contact</button>
            </nav>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
}
