import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Tools {

    public static String Capitalize(String text) {

        List<String> newText = new ArrayList<>();

        if (text.matches("^[a-zA-Z0-9,.:;]+")) {

            newText.add(text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase());
            return String.join(" ", newText);

        } else {
            throw new IllegalArgumentException("Invalid Format of content.");
        }
    }

    public static String Title(String text) {

        if (text.matches("[a-zA-Z0-9,.:; ]+")) {

            String[] textSplit = text.split(" ");
            ArrayList<String> newText = new ArrayList<>();

            for (String word : textSplit) {

                newText.add(word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase());
            }

            return String.join(" ", newText);

        } else {
            throw new IllegalArgumentException("Invalid Format of the content.");
        }
    }

    public static String Upper(String text){

        if (!text.isEmpty()){

            HashMap<String, String> alphabetic = new HashMap<>();
            String textUpper = "";

            int charactLower = 97;
            int charcatUpper = 65;

            for (int e = 0; e < 25; e++){

                alphabetic.put( String.valueOf(Character.toChars(charactLower)), String.valueOf((char) charcatUpper)) ;
                charactLower++;
                charcatUpper++;
            }

            for (int e = 0; e < text.length(); e++){

                if (alphabetic.containsKey(String.valueOf(text.charAt(e)))){

                    textUpper += alphabetic.get(Character.toString(text.charAt(e)));
                }else {

                    textUpper += String.valueOf(text.charAt(e));
                }
            }

            return textUpper;

        }else {
            throw new IllegalArgumentException("ERROR: The content of the variable must be 'STRING' and not 'NULL'.");
        }

    }
}
