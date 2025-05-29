import java.util.ArrayList;
import java.util.List;

public class Tools {

    public static String Capitalize(String text){

        List<String> newText = new ArrayList<>();

        if (text.matches("^[a-zA-Z0-9,.:;]+")){

            newText.add(text.substring(0,1).toUpperCase() + text.substring(1).toLowerCase());
            return String.join(" ", newText);

        }else {
            throw new IllegalArgumentException("Invalid Format of content.");
        }


    }

    public static Boolean IsValidString(String text){

        if (text.isEmpty() || text == null){

            return false;
        }else {

            for (int i = 0; i < text.length(); i++ ){

                char character = text.charAt(i);

                if (!(Character.isLetter(character) || character == ' ' || character == ',' || character == ';' || character == '.' || character == ':' )){

                    return false;
                }else {
                    continue;
                }
            }
            return true;
        }
    }

    public static String Title(String text){


        if (Tools.IsValidString(text)){

            ArrayList<String> newText = new ArrayList<>();
            String[] textSplit = text.split(" ");

            for (String word : textSplit){

                newText.add(word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase());
            }

            return String.join(" ", newText);

        }else {
            throw new IllegalArgumentException("Invalid Format of content.");
        }

    }
}
