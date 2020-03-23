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
		respuesta.setRespuesta("Se ha realizado un cargo a la tarjeta ejecutiva: "+ peticion.getTarjeta() + " por la cantidad de $1,000.00 con número de autorización");
		return respuesta;
	}
	
	@PayloadRoot(namespace="http://cobrar.me/Banco", 
			localPart="ReembolsoRequest")
	
	@ResponsePayload
	public ReembolsoResponse getSaludo(@RequestPayload ReembolsoRequest peticion) {
		ReembolsoResponse respuesta = new ReembolsoResponse();
		respuesta.setRespuesta("Se ha abonado a su tarjeta ejecutiva: "+ peticion.getTarjeta()+ " la cantidad de $1,000.00 como parte de la cancelación de la reservación");
		return respuesta;
	}
}
