import java.util.*;

public class Main {
    public static void main(String[] args){
        int a[]=new int[5];
        Scanner sc = new Scanner(System.in);
        for(int i=0; i<a.length; i++){
            a[i]=sc.nextInt();
        }
        sc.close();
        
        int s=0;
        for(int i:a){
            System.out.println(i);
            s+=i;
        }
        System.out.println("AVG = "+(s/a.length));

    }
}