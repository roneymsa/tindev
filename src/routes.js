import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login Tindev'
            },
        },
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Tindev'
            },
        },
    })
);

export default Routes;