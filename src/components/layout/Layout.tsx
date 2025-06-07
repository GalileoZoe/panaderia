import React from 'react';
import '../../App.css';
import { useFeed } from '../../context/FeedContext';
import { Home } from '../screens/Home';
import { Contact } from '../screens/Contact';
import { About } from '../screens/About';
import { Location } from '../screens/Location';
import { Store } from '../screens/Store';
import { Clients } from '../screens/Clients';
import { Products } from '../screens/Products';



export const Layout: React.FC = () => {
    const { feed } = useFeed();

    switch (feed) {
        case 1:
            return <Home/>;
        case 2:
            return <About/>;
        case 3:
            return <Products/>;
        case 4:
            return <Clients/>;
        case 5:
            return <Location/>;
        case 6:
            return <Contact/>;
        case 7:
            return <Store/>;
        default:
            return <Home/>;
    }
};
