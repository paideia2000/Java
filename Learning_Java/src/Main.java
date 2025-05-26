import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Scanner input = new Scanner(System.in);

        final double discountOldBread = 0.6;
        final double priceBread = 3.49;

        int amountOldBreadBuy;

        while (true) {
            System.out.print("\nEnter the number of loaves sold that are not from the day: ");
            if (input.hasNextInt()){
                amountOldBreadBuy = input.nextInt();
                input.nextLine();
                break;
            }else {
                System.out.println("ERROR: Check the value inserted.");
                input.nextLine();
            }
        }

        try{

            double totalValue = amountOldBreadBuy * priceBread *  (1 - discountOldBread);
            System.out.printf("\nHas comprado %d bread a un precio de %.2f con un descuento de %.2f porciento por lo que tienes que pagar %.2f euros", amountOldBreadBuy, priceBread, discountOldBread, totalValue);

        } catch (ArithmeticException e){
            System.err.println("An Error ocurred: " + e.getMessage());
        }
    }
}






