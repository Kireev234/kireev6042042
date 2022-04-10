/**
 * Created by akireyeu on 08.08.2019.
 */

public with sharing class MyPrinterDecorator1 implements Printer{
    Printer p = null;
    public MyPrinterDecorator1(Printer printer){
        p = printer;
    }
   public String print(){
       String str = '"'+p.print()+'"';
       return  str;
   }
}
//            наглядная реализация декоратора
//            MyPrinter p = new MyPrinter();
//            MyPrinterDecorator1 d = new MyPrinterDecorator1(p);
//            System.debug(p.print());
//            System.debug(d.print());