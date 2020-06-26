package controlador;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import bd.Conexion;

public class OperacionDAO {
	private String tarjeta;
	private String fechacad;
	private int cvv;
	private int monto;
	private Conexion conexion;
	/**
	 * Constructor vacion de la clase
	 */
	public OperacionDAO() {
		
	}
	/**
	 * Constructor con 4 parametros, será utilizado al momento de que se mande a llamar la funcion Realizar Cobro 
	 * @param tarjeta
	 * @param fechacad
	 * @param cvv
	 * @param monto
	 */	
	public OperacionDAO(String tarjeta, String fechacad, int cvv, int monto) {
		this.tarjeta=tarjeta;
		this.fechacad=fechacad;
		this.cvv=cvv;
		this.monto=monto;
	}
	
	/**
	 * Constructor con 4 parametros, será utilizado al momento de que se mande a llamar la funcion Realizar reembolso
	 * @param tarjeta
	 * @param monto
	 */
	public OperacionDAO(String tarjeta, int monto) {
		this.tarjeta=tarjeta;
		this.monto=monto;
	}
	
	/**
	 * Método para realizar un registro en la tabla pagos de un cobro nuevo
	 * @return
	 */
	public ResultSet obtenerPagos() {
		ResultSet rs = null;
		conexion= new Conexion();
		Connection con = conexion.getConnection(); 
		try {
			String query = "SELECT * FROM pagos;";
			Statement st = con.createStatement();
			rs= st.executeQuery(query);
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return rs;
	}
	/*public static void main(String args[]) {
		OperacionDAO operacionDAO = new OperacionDAO();
		ResultSet rs = operacionDAO.obtenerPagos();
		try {
			while(rs.next()) {
				System.out.println(rs.getString("tarjeta"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}*/
}