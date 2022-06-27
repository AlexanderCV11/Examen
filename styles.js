import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray"
    },
    
    titulo: {
        backgroundColor: "red",
        justifyContent: "center",
        fontSize: 59,
    },

    text: {
        textAlign: "center",
        backgroundColor: "red",
        fontSize: 20,
    },

    opciones: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      justifyContent: "center",
    },

    opcion: {
      fontSize: "30px",
      border: "1px solid black",
      borderRadius: "50%",
      padding: "20px",
      cursor: "pointer", 
      backgroundColor: "blue",
    },

    tinyLogo: {
        width: '100%',
        height: '50%',
        borderRadius: 0,
      },
})