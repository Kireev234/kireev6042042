/**
 * Created by akireyeu on 28.01.2020.
 */

public interface Observable {
    void addObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObserver();
}