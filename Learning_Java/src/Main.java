import java.util.Arrays;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int invalidtry = 0;
        while (invalidtry < 3) {
            System.out.print("Enter a numbers please: ");

            if (input.hasNextInt()) {
                int number = input.nextInt();
                System.out.printf("The number is %d\n", number);
                break;
            } else if (input.hasNextDouble()) {
                double number = input.nextDouble();
                System.out.printf("The number is %.2f\n", number);
                break;
            } else {
                String value = input.nextLine();
                System.out.printf("The value '%s' isin't a number\n", value);
                invalidtry++;

            }
        }
        System.out.println("Close the bucle");
        input.close();
    }
}



