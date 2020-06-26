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
	
	/**
	 * Metodo para conectar el sistema a la Base de Datos
	 * @param bd -usado para ingresar a la base de datos
	 * @param host - usado para saber hacía a donde se va a dirigir y¿e intentar conectarse
	 * @param puerto - usado para indicar la interfaz de entrada
	 * @param url - Cadena completa perteneciente a lo solicitado para realizar una conexión exitosa
	 * @param usuario - Indicar por medio de que usuario se va a acceder a la Base de Datos, se debe tener en cuenta que este usuario debe existir
	 * @param contra - Indica la contraseña del usuariopor el cual se va a aingresar a la Base de Datos
	 * @return 
	 */
	public Connection getConnection() {
		try {
			cn = DriverManager.getConnection(url, usuario, contra);
		}catch(SQLException e) {
			System.out.println("La conexion con la Base de Datos ha fallado");
			System.out.println(e.getMessage());
		}
		if(cn!=null) {
			System.out.println("La conexion con la Base de Datos ha sido exitosa");
			
		}else {
			System.out.println("La conexion con la Base de Datos ha fallado else 2");			
		}
		return cn;
	}
	/*public static void main(String args[]) {
		Conexion conexion = new Conexion();
		conexion.getConnection();
	}*/
}
