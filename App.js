console.disableYellowBox = true;

import { Navigation } from "react-native-navigation";
//import SplashScreen from 'react-native-splash-screen';

//Translations
// import I18n, { getLanguages } from 'react-native-i18n';
// // Available languages
// I18n.translations = {
//   'en': require('./src/translations/en'),
//   'es': require('./src/translations/es'),
// };
// I18n.fallbacks = true;

import HomeScreen from "./src/screens/Home.Screen";
import MedicationsScreen from './src/screens/Medications.Screen';
import WeeklyPlanScreen from './src/screens/WeeklyPlan.Screen';
import MovingSafelyScreen from './src/screens/MovingSafely.Screen';
import EmergencyToolkit from './src/screens/Toolkits/EmergencyToolkit.Screen';
import MedicationsToolkit from './src/screens/Toolkits/MedicationsToolkit.Screen';
import HelpNeededToolkit from './src/screens/Toolkits/HelpNeededToolkit.Screen';
import PhysicalToolkit from './src/screens/Toolkits/PhysicalToolkit.Screen';
import ScheduleToolkit from './src/screens/Toolkits/ScheduleToolkit.Screen';
import LoginScreen from './src/screens/Login.Screen';
import SkinCareScreen from './src/screens/SkinCare.Screen';
import BladderControlScreen from './src/screens/BladderControl.Screen';
import BloodPressureScreen from './src/screens/BloodPressure.Screen';
import ToolkitHomeScreen from './src/screens/Toolkits/ToolkitHomeScreen';
import RangeMotionScreen from './src/screens/RangeMotion.Screen';
import GettingUpScreen from './src/screens/GettingUp.Screen';
import BrainBodyScreen from './src/screens/BrainBody.Screen';
import EmergencyScreen from './src/screens/Emergency.Screen';
import BioScreen from './src/screens/Bio.Screen';
import ContentsScreen from './src/screens/Contents.Screen';
import NewDayScreen from './src/screens/NewDay.Screen';
import ProfileScreen from './src/screens/Profile.Screen';
import ModalCoverScreen from './src/screens/ModalCover.Screen';

// Register Screens
Navigation.registerComponent("StrokeApp.HomeScreen", () => HomeScreen);
Navigation.registerComponent("StrokeApp.MedicationsScreen", () => MedicationsScreen);
Navigation.registerComponent("StrokeApp.WeeklyPlanScreen", () => WeeklyPlanScreen);
Navigation.registerComponent("StrokeApp.MovingSafelyScreen", () => MovingSafelyScreen);
Navigation.registerComponent("StrokeApp.EmergencyToolkitScreen", () => EmergencyToolkit);
Navigation.registerComponent("StrokeApp.MedicationsToolkitScreen", () => MedicationsToolkit);
Navigation.registerComponent("StrokeApp.HelpNeededToolkitScreen", () => HelpNeededToolkit);
Navigation.registerComponent("StrokeApp.PhysicalToolkitScreen", () => PhysicalToolkit);
Navigation.registerComponent("StrokeApp.ScheduleToolkitScreen", () => ScheduleToolkit);
Navigation.registerComponent("StrokeApp.LoginScreen", () => LoginScreen);
Navigation.registerComponent("StrokeApp.SkinCareScreen", () => SkinCareScreen);
Navigation.registerComponent("StrokeApp.BladderControlScreen", () => BladderControlScreen);
Navigation.registerComponent("StrokeApp.BloodPressureScreen", () => BloodPressureScreen);
Navigation.registerComponent("StrokeApp.ToolkitHomeScreen", () => ToolkitHomeScreen);
Navigation.registerComponent("StrokeApp.RangeMotionScreen", () => RangeMotionScreen);
Navigation.registerComponent("StrokeApp.GettingUpScreen", () => GettingUpScreen);
Navigation.registerComponent("StrokeApp.BrainBodyScreen", () => BrainBodyScreen);
Navigation.registerComponent("StrokeApp.EmergencyScreen", () => EmergencyScreen);
Navigation.registerComponent("StrokeApp.BioScreen", () => BioScreen);
Navigation.registerComponent("StrokeApp.ContentsScreen", () => ContentsScreen);
Navigation.registerComponent("StrokeApp.ProfileScreen", () => ProfileScreen);
Navigation.registerComponent('StrokeApp.NewDayScreen', () => NewDayScreen);
Navigation.registerComponent("StrokeApp.ModalCoverScreen", () => ModalCoverScreen);


Navigation.startSingleScreenApp({
    screen: {
      screen: "StrokeApp.ModalCoverScreen",
    },
});



