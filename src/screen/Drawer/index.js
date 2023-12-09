import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoardScreen from '../DashBoardScreen';
import EventsScreen from '../EventsScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Drawer.Screen name="EventsScreen" component={EventsScreen} />
    </Drawer.Navigator>
  );
}