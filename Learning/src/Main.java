import java.util.Arrays;

import static java.util.Arrays.sort;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        byte age = 24;
        char curso = 'a';
        boolean israining = true;
        float money = 17.8f;
        double moremoney = 15.5;

        String text = " Hola Renesongo  ";
        String new_text = text.trim().replace("songo", "cito");

        int[][] listNumb = new int[4][2];
        listNumb[2][1] = 25;
        System.out.println(Arrays.deepToString(listNumb));


        int[] test = new int[5];
        test[0] = 12;
        test[4] = 1;
        test[2] = 9;
        test[3] = 0;

        sort(test);

        System.out.println(Arrays.toString(test));


    }

}
