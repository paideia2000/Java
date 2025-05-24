import java.util.Locale;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner input = new Scanner(System.in);

        double worked_hours = 0;
        double pay_for_hours = 0;

        do {

            System.out.print("Insert the numbers of the hours worked: ");
            if (!input.hasNextDouble()) {
                System.out.println("\nERROR: You must enter a number.\n");
                input.nextLine();
                continue;

            } else {
                worked_hours = input.nextDouble();
                System.out.println("Number added succesfully.");
                input.nextLine();
                break;
            }
        } while (true);

        do {
            System.out.print("\nEnter the pay for hours: ");
            String userImput = input.nextLine();

            if (userImput.matches("[A-Za-z ]+")) {
                System.out.println("\nERROR: You bust enter a number.\n");
                continue;
            }
            try{
                pay_for_hours = Double.parseDouble(userImput);
                break;
            } catch (NumberFormatException e) {
                System.out.println("\nERROR: Number format invalid. Try Again.");
                }

            } while (true);

        double salary = (worked_hours * 4) * pay_for_hours;
        System.out.printf("Your salary is %.2f", salary );
        input.close();
    }
}



