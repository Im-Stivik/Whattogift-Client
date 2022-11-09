import { StyleSheet } from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({
   conrainer: {
        flex: 1,
        backgroundColor: Colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
   },
   input: {
         width: '80%',
         height: 40,
         margin: 12,
         borderWidth: 1,
         padding: 10,
         borderColor: Colors.inputBorder,
         borderRadius: 5,
         backgroundColor: Colors.inputBg,
   },
   Text: {
         color: Colors.text,
         fontSize: 20,
         fontWeight: 'bold',
   },

   SubmitButtonStyle: {
         marginTop: 10,
         paddingTop: 15,
         paddingBottom: 15,
         marginLeft: 30,
         marginRight: 30,
         marginBottom: 20,
   },

});