package bd;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
	Connection cn;
	String bd="banco";
	String host="localhost";
	String puerto= "3306";
	String url="jdbc:mysql://"+host+":"+puerto+"/"+bd+"?useTimezone=true&serverTimezone=UTC";
	String usuario="root";
	String contra="090699Omar18";
	public Connection getConnection() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			System.exit(-1);
		}
		try {
			cn = DriverManager.getConnection(url, usuario, contra);
		}catch(SQLException e) {
			System.out.println("La conexion con la Base de Datos ha fallado");
		}
		if(cn!=null) {
			System.out.println("La conexion con la Base de Datos ha sido exitosa");
		}else {
			System.out.println("La conexion con la Base de Datos ha fallado");			
		}
		return cn;
	}
}
