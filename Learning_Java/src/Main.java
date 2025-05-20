import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        String[] names = {"Rene","Raul","Ismary","Ruben"};

        System.out.println("ID\tNAMES");
        byte contador = 1;
        for (String name : names) {

            System.out.printf("%d\t%s\n",contador,name);
            contador++;

        };
        System.out.println("-".repeat(50));

        byte conten = 10;
        while (conten > names.length) {
            System.out.printf("%d Renecito\n", conten);
            conten--;
        }

        for (byte i = 0; i < 10; i++){
            System.out.println(Arrays.toString(names));
            i += 2;
        }

        System.out.printf("El nombre del alumno es: %s", names[1]);

    }
}