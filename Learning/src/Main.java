import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        byte age = 24;
        char curso = 'a';
        boolean israining = true;
        float money = 17.8f;
        double moremoney = 15.5;



        final String text = " Hola Renesongo  ";



        String new_text = text.trim().replace("songo", "cito");
        System.out.println(new_text);

        int[][][] listNumb = new int[4][2][4];
        listNumb[0][1][0] = 25;
        listNumb[2][0][1] = 20;
        listNumb[3][1][3] = 100;
        System.out.println(Arrays.deepToString(listNumb));


        int[] test = new int[5];
        test[0] = 12;
        test[4] = 1;
        test[2] = 9;
        test[3] = 0;

        Arrays.sort(test);

        System.out.println(Arrays.toString(test));


    }

}
