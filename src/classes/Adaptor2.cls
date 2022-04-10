/**
 * Created by akireyeu on 08.08.2019.
 */

public with sharing class Adaptor2 implements Figure{
    FigureCircle f = null;
   public Adaptor2(FigureCircle figure){
        f = figure;
    }
    public void draw(){
        f.drawCircle();
    }
}