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
	String usuario="banco";
	String contra="090699Banco@20";
	public Connection getConnection() {
		try {
			cn = DriverManager.getConnection(url, usuario, contra);
		}catch(SQLException e) {
			System.out.println(e.getCause()+ e.getMessage());
		}
		if(cn!=null) {
			System.out.println("La conexion con la Base de Datos ha sido exitosa");
		}else {
			System.out.println("La conexion con la Base de Datos ha fallado");			
		}
		return cn;
	}
}
