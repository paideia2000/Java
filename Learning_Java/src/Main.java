import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Scanner input = new Scanner(System.in);

        final int weightClown = 112;
        final int weightDolls = 75;

        int amountClown;
        int amountDolls;

        while (true) {
            System.out.print("\nEnter the numbers of clown sell: ");
            if (input.hasNextInt()) {
                amountClown = input.nextInt();
                input.nextLine();
                break;
            } else {
                System.out.println("ERROR: You must insert an integer.");
                input.nextLine();
            }
        }

        while (true) {
            System.out.print("\nEnter the number of the dolls sell: ");
            if (input.hasNextInt()) {
                amountDolls = input.nextInt();
                break;
            } else {
                System.out.println("ERROR: You must insert an integer.");
                input.nextLine();
            }
        }

        try {
            double totalweight = (weightClown * amountClown) + (weightDolls * amountDolls);

            System.out.printf("The total weight oh the package is: %.2f lb", totalweight);
        } catch (Exception e) {
            System.err.println("An error ocurred: " + e.getMessage());;
        }

    }
}






