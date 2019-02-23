import Myweb2 from '../srcc/Myweb2';
import Myweb3 from '../srcc/Myweb3';

import {StackNavigator} from 'react-navigation';

const web1= StackNavigator(
    {
        Home:
        {
            screen:Myweb2,
            navigationOptions:
            {
                header:null
            }
        },
        Details:
        {
            screen:Myweb3,
            navigationOptions:
            {
                header:null
            }
        }
    },
    {
        initialRouteName:'Home'
    }
)
export default web1 ;
