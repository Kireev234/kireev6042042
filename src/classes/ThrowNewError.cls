/**
 * Created by akireyeu on 16.07.2019.
 */

public class ThrowNewError {
    public static void  newError() {
        try{
           Integer x = 1;
           x =  x/0;
        }
        catch (Exception e){
            System.debug('Exception caught: ' + e.getMessage());
        }
    }
}