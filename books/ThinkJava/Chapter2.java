package books.ThinkJava;

public class Chapter2 {
    public static void main(String[] args) {
        String firstName = "Zack";
        String lastName = "Sawyer";
        int age = 29;

        System.out.println("Hello, " + firstName + " " + lastName);
        System.out.println("You are " + age + " years old");
    }
}

/*
 * NOTES
 * When dividing integers, java performs 'integer division'. This means, it
 * always rounds down. 60 / 22 === 2
 *
 * Alternatively, you can use floating point numbers. The default floating point
 * type is double -- short for 'double-precision'
 */
