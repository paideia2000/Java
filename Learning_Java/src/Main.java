import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int amountry = 0;
        while (amountry < 3) {
            System.out.print("\nEnter your age: ");

            if (input.hasNextInt()){
                int age = input.nextInt();
                System.out.printf("\nYour age is '%d' \n", age);
                break;
            } else if (input.hasNextDouble()) {
                double invalid_value = input.nextDouble();
                System.out.printf("\nThe age must be a integer number, not decimal '%.1f'\n", invalid_value);
                amountry++;
            }else {
                input.nextLine();
                System.out.println("\nERROR: Try Again please.");
                amountry++;
            }

        }
        System.out.print("\nLoop Closed.\n");
        input.close();
    }
}



