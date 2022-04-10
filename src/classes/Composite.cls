/**
 * Created by akireyeu on 07.08.2019.
 */

public with sharing class Composite implements Shape{

        private  List<Shape> components = new List<Shape>();

        public void addComponent(Shape shape){
            components.add(shape);
        }
        public void removeComponent(Integer shape){
            components.remove(shape);
        }
        public void draw(){
            for(Shape component: components){
                component.draw();
            }

        }

}