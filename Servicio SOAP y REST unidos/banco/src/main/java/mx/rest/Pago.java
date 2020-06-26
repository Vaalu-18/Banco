package mx.uv.rest;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import controlador.OperacionDAO;

public class Pago {
	private String tarjeta;
	Pago saludar;
	private List<String> tarjetas = new ArrayList<>();
	private String fechacad;
	private int cvv;
	private int monto;
	
	public Pago() {
		
	}
	public Pago(String tarjeta) {
		this.tarjeta=tarjeta;
	}
	public Pago(String tarjeta, String fechacad, int cvv, int monto) {
		this.tarjeta=tarjeta;
		this.fechacad=fechacad;
		this.cvv=cvv;
		this.monto=monto;
	}
	public Pago(Pago saludar) {
		this.saludar = saludar;
	}
	public void setTarjeta(String tarjeta) {
		this.tarjeta=tarjeta;;
	}
	public String getTarjeta() {
		return tarjeta;
	}
	public void setFechacad(String fechacad) {
		this.fechacad = fechacad;
	}
	public String getFechacad() {
		return fechacad;
	}
	public void setCvv(int cvv) {
		this.cvv= cvv;
	}
	public int getCvv() {
		return cvv;
	}
	public void setMonto(int monto) {
		this.monto= monto;
	}
	public int getMonto() {
		return monto;
	}
	public Pago(List<String> tarjetas){
		this.tarjetas = tarjetas;
	}
	public List<String> buscarPagos() {
		OperacionDAO operaciondao = new OperacionDAO();
		ResultSet rs = operaciondao.obtenerPagos();
		List<String> pagos = new ArrayList<>(); 
		try {
			while(rs.next()) {
				pagos.add(rs.getString("tarjeta"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return pagos;
	}
	public List<Pago> buscarTarjetas() {
		OperacionDAO operaciondao = new OperacionDAO();
		ResultSet rs = operaciondao.obtenerPagos();
		List<Pago> tarjetas = new ArrayList<>();
		int i=0;
		try {
			while(rs.next()) {
				String mensaje = rs.getString("tarjeta");
				tarjetas.add(new Pago(mensaje));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return tarjetas;
	}
	public List<Pago> buscarPaguitos() {
		OperacionDAO operaciondao = new OperacionDAO();
		ResultSet rs = operaciondao.obtenerPagos();
		List<Pago> tarjetas = new ArrayList<>();
		int i=0;
		try {
			while(rs.next()) {
				String numeroTarjeta = rs.getString("tarjeta");
				String fechacad = rs.getString("fechacad");
				int cvv = rs.getInt("cvv");
				int monto = rs.getInt("monto");
				tarjetas.add(new Pago(numeroTarjeta, fechacad, cvv, monto));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return tarjetas;
	}
	/*public static void main(String args[]) {
		Pago saludar = new Pago();
		List<String> pagos= new ArrayList<>(); 
		pagos =	saludar.buscarPagos();
		for(String str : pagos){
		    System.out.println(str);
		}
	}*/
}
