/**
 * Created by akireyeu on 06.08.2019.
 */

public with sharing class Singleton {
    private Singleton(){}
    private  static Singleton instance;
    public static Singleton getInstance(){
        if(instance == null){instance = new Singleton();}
        return  instance;
    }
}