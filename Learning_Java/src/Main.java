
import java.sql.Array;
import java.util.Arrays;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        String[][][] books = new String[2][2][2];
        books[0][0][0] = "Padre Rico";
        books[0][0][1] = "La Asistenta";
        books[0][1][0] = "La Grieta";
        books[0][1][1] = "Dexter en la Ocuridad";

        System.out.println(Arrays.deepToString(books));

        Scanner input =  new Scanner(System.in);
        System.out.println("Inserte your age:");
        float age = input.nextFloat();
        System.out.printf("The name is %f", age);
        
    }
}

