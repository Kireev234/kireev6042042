/**
 * Created by akireyeu on 17.12.2019.
 */

public with sharing class FNumbers {
    public FNumbers(Integer x){
        if(x<1){
            System.debug('ERROR');
        }
        else {
            for (Integer i = 1; i <= x; i++) {
                System.debug(setRec2(i));
            }
        }
    }
    public static Integer setRec2(Integer i){
        if (i==0) {
        return 0;
        }
        if (i==1) {
            return 1;
        }
        else {
            return setRec2(i-1)+setRec2(i-2);
            }
    }
}