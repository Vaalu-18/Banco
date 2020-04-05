package mx.uv.banco;

import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import me.cobrar.banco.CobrarRequest;
import me.cobrar.banco.CobrarResponse;
import me.cobrar.banco.ReembolsoRequest;
import me.cobrar.banco.ReembolsoResponse;

@Endpoint
public class EndPoint {

	@PayloadRoot(namespace="http://cobrar.me/Banco", 
			localPart="CobrarRequest")
	
	@ResponsePayload
	public CobrarResponse getCobro(@RequestPayload CobrarRequest peticion) {
		CobrarResponse respuesta = new CobrarResponse();
		if(peticion.getTarjeta().length()==16) {
			if(peticion.getTarjeta().matches("[0-9]*")) {
				int i = Integer.parseInt(peticion.getTarjeta().substring(0, 4));
				if(i>= 5500 && i<= 7749) {
					respuesta.setRespuesta("\n"+"Banco 3: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion: "+ "XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
				}else {
					if(i>=1000 && i<=3249) {
						respuesta.setRespuesta("\n"+
								"Cargo en proceso..." +"\n"+ "La tarjeta: "+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco."+"\n"+"En seguida estableceremos una conexion con el para poder realizar el cargo..."+"\n"+
								"Banco 1: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion:"+ "XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
					}else if(i>=3250 && i<=5499) {
						respuesta.setRespuesta("\n"+
								"Cargo en proceso..." +"\n"+ "La tarjeta: "+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco."+"\n"+"En seguida estableceremos una conexion con el para poder realizar el cargo..."+"\n"+
								"Banco 2: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
					}else if(i>=7750 && i<= 9999) {
						respuesta.setRespuesta("\n"+
								"Cargo en proceso..." +"\n"+ "La tarjeta: "+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco."+"\n"+"En seguida estableceremos una conexion con el para poder realizar el cargo..."+"\n"+
								"Banco 4: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
					}
				}
			}else {
				respuesta.setRespuesta("\n"+"Transaccion cancelada. "+"\n"+ "El numero de tarjeta ejecutiva que ha ingresado("+peticion.getTarjeta()+") no pertenece al sistema de tarjetas permitido. "
						+"\n"+ "Por favor, ingrese un numero de tarjeta valido (16 digitos numericos)");
			}
		}else {
			respuesta.setRespuesta("\n"+"Transaccion cancelada. "+"\n"+"El numero de tarjeta ejecutiva que ha igresado(" + peticion.getTarjeta() + ") no pertenece al sistema de tarjetas permitido. "
					+"\n"+ "Por favor, ingrese un numero de tarjeta valido (16 digitos)");			
		}
		return respuesta;
	}
	
	@PayloadRoot(namespace="http://cobrar.me/Banco", 
			localPart="ReembolsoRequest")
	
	@ResponsePayload
	public ReembolsoResponse getReembolso(@RequestPayload ReembolsoRequest peticion) {
		ReembolsoResponse respuesta = new ReembolsoResponse();
		if(peticion.getTarjeta().length()==16) {
			if(peticion.getTarjeta().matches("[0-9]*")) {
				int i = Integer.parseInt(peticion.getTarjeta().substring(0, 4));
				if(i>= 5500 && i<= 7749) {
					respuesta.setRespuesta("\n"+"Banco 3: Se ha realizado un reembolso a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $" + peticion.getMonto() + ".00 \n Gracias por su confianza");
				}else {
					if(i>=1000 && i<=3249) {
						respuesta.setRespuesta("\n"+
								"La tarjeta: XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco. En seguida estableceremos una conexion con el para poder otorgarle su reembolso..."+"\n"+
								"Banco 1: Se ha realizado un reeembolso a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00"+ "\n" +"Gracias por su confianza");
					}else if(i>=3250 && i<=5499) {
						respuesta.setRespuesta("\n"+
								"La tarjeta: XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco. En seguida estableceremos una conexion con el para poder otorgarle su reembolso..."+"\n"+
								"Banco 2: Se ha realizado un reembolso a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00" +"\n" +"Gracias por su confianza");
					}else if(i>=7750 && i<= 9999) {
						respuesta.setRespuesta("\n"+
								"La tarjeta: XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco. En seguida estableceremos una conexion con el para poder otorgarle su reembolso..."+"\n"+
								"Banco 4: Se ha realizado un reembolso a la tarjeta ejecutiva con terminación: "+"XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00"+ "\n"+ "Gracias por su confianza");
					}
				}
			}else {
				respuesta.setRespuesta("\n"+"El reembolso no ha sido realizado." +"\n"+ "El numero de tarjeta ejecutiva que ha ingresado("+peticion.getTarjeta()+") no pertenece al sistema de tarjetas permitido. "
						+"\n"+ "Por favor, ingrese un numero de tarjeta valido (16 digitos numericos)");
			}
		}else {
			respuesta.setRespuesta("\n"+"El reembolso no ha sido realizado."+"\n"+"El numero de tarjeta ejecutiva que ha igresado(" + peticion.getTarjeta() + ") no pertenece al sistema de tarjetas permitido. "
					+"\n"+ "Por favor, ingrese un numero de tarjeta valido (16 digitos)");			
		}
		return respuesta;
	}
}
