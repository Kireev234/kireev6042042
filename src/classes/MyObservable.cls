/**
 * Created by akireyeu on 28.01.2020.
 */

public class MyObservable implements Observable{
    List<Observer> observers = new List<Observer>();
    Integer temp{get;set;}
    public void setValue(Integer i){
        temp=i;
        notifyObserver();
    }
   public void addObserver(Observer o){
       observers.add(o);
    }
   public void removeObserver(Observer o){
       observers.remove(observers.indexOf(o));
   }
   public void notifyObserver(){
       for(Observer o: observers){
        o.handleEvent(temp);
       }
   }
}