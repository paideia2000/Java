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

    public static String Title(String text){

        if (text.matches("[a-zA-Z0-9,.:;]+")){

            String[] textSplit = text.split(" ");
            ArrayList<String> newText = new ArrayList<>();

            for (String word : textSplit){

                newText.add(word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase());
            }

            return String.join(" ", newText);

        }else {
            throw new IllegalArgumentException("Invalid Format of the content.");
        }

    }
}
