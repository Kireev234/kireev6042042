/**
 * Created by akireyeu on 28.01.2020.
 */

public class MyObserver implements Observer{
   public void handleEvent(Integer temp){
       System.debug(temp);
   }
}