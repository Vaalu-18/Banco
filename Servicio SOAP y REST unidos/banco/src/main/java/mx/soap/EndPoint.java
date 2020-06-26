package mx.uv.soap;

import java.util.ArrayList;
import java.util.List;

//import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import controlador.OperacionDAO;
import me.cobrar.banco.CobrarRequest;
import me.cobrar.banco.CobrarResponse;
import me.cobrar.banco.ReembolsoRequest;
import me.cobrar.banco.ReembolsoResponse;

@Endpoint
public class EndPoint {

	/**
	 * Método para realizar un cobro a una tarjeta ejecutiva
	 * @param peticion
	 * @return mensaje "Se ha realizado un cargo..."
	 */
	@PayloadRoot(namespace="http://cobrar.me/Banco", 
			localPart="CobrarRequest")
	
	@ResponsePayload
	public CobrarResponse getCobro(@RequestPayload CobrarRequest peticion) {
		CobrarResponse respuesta = new CobrarResponse();
		//Verifica que la longitud de la tarjeta sea correcta (16 dígitos)
		if(peticion.getTarjeta().length()==16) {
			//Verifica que los datos ingresado sean numéricos
			if(peticion.getTarjeta().matches("[0-9]*")) {
				int i = Integer.parseInt(peticion.getTarjeta().substring(0, 4));
				//Verifica que la tarjeta esté en el rango permitido para que este banco haga la transacción y las consultas a la Base de Datos
				if(i>= 5500 && i<= 7749) {
					//Verifica que la caducidad este en datos numéricos
					if(peticion.getCaducidad().matches("[0-9]*")) {
						//Verifica que la fecha de caducidad enga una longitus de 4 dígitos
						if(peticion.getCaducidad().length()==4) {
							//Divide la cadena de 4 en 2, los dos primeros seran el mes y los dos últimos el año
							int o= Integer.parseInt(peticion.getCaducidad().substring(0,2));
							int u= Integer.parseInt(peticion.getCaducidad().substring(2, 4));
							//Verifica que los números de mes sean correctos (01-12) y de la misma forma el de los años (01-99)
							if((o<13 && o>0)&&(u>0 && u<100)) {
								//Verifica que la tarjeta siga vigente de acuerdo a su fecha de caducidad
								if(o<4 && u<=20) {
									respuesta.setRespuesta("\n"+"Su tarjeta se encuentra caducada"+"\n"+"Por favor acuda a su banco más cercano para una renovación"+"\n");
								}else {
									String cvv= String.valueOf(peticion.getCvv());
									//Verifica si la longitus del cvv es mayor o menor a tres, en caso de que se cumpla avisará que el cvv se compone de 3 dígitos
									if(cvv.length()<3 || cvv.length()>3) {
										respuesta.setRespuesta("\n"+"El código cvv sólo está compuesto por 3 digitos numéricos, ingrese correctamente el cvv"+"\n");
									}else {
										//Se llama a la clase OperacionDAO para poder ejecutar los métodos de consulta a la Base de Datos
										OperacionDAO cobro= new OperacionDAO(peticion.getTarjeta(), peticion.getCaducidad(), peticion.getCvv(), peticion.getMonto());
										//Verifica si el resultado arrojado por los métodos es correcto, y avisará al usuario que se completo el cobro
										if(cobro.registrarPago()) {
											respuesta.setRespuesta("\n"+"Banco 3: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion: "+ "XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
										}else {
											//Si no se pudo completar el registro por un problema en la Base de Datos, se le notificará al usuario
											respuesta.setRespuesta("\n"+"Banco 3: No se ha podido realizar el registro de su pago debido a un problema en la Base de Datos");
										}
									}
								}
							}else {
								//Se le notifica al usuario que el mes o el año ingresados no se encuentra dentro de los permitidos
								respuesta.setRespuesta("\n"+"La fecha ingresada es incorrecta"+"\n"+"Por favor, ingrese una fecha que este dentro del formato permitido (mmaa)");
							}
						}else {
							//Verifica si la fecha de caducidad tiene más o menos de 4 caracteres
							if(peticion.getCaducidad().length()<4) {
								respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener 4 dígitos (mm/aa)"+"\n");
							}else {
								if(peticion.getCaducidad().length()>4) {
									respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener sólo 4 dígitos(mm/aa)"+"\n");
								}
							}
						}
					}else {
						//Se le notifica al usuario ue sólo se permiten datos numéricos
						respuesta.setRespuesta("\n"+"La fecha de caducidad debe ser introducidad en datos numéricos, iniciando por el mes (mm) y seguido por el año (aa)."+"\n");
					}
				}else {
					//Verifica si el rango de tarjeta pertenecen al banco uno, de ser así se hace una simulación de que se está comunicando con dicho banco
					if(i>=1000 && i<=3249) {
						//Se realizan todos los pasos de validación descritos en el modulo anterior
						if(peticion.getCaducidad().matches("[0-9]*")) {
							if(peticion.getCaducidad().length()==4) {
								int o= Integer.parseInt(peticion.getCaducidad().substring(0,2));
								int u= Integer.parseInt(peticion.getCaducidad().substring(2, 4));
								if((o<13 && o>0)&&(u>0 && u<100)) {
									if(o<4 && u==20) {
										respuesta.setRespuesta("\n"+"Su tarjeta se encuentra caducada"+"\n"+"Por favor acuda a su banco más cercano para una renovación"+"\n");
									}else {
										String cvv= String.valueOf(peticion.getCvv());
										if(cvv.length()<3 || cvv.length()>3) {
											respuesta.setRespuesta("\n"+"El código cvv sólo está compuesto por 3 digitos numéricos, ingrese correctamente el cvv"+"\n");
										}else {
											respuesta.setRespuesta("\n"+
													"Cargo en proceso..." +"\n"+ "La tarjeta: "+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco."+"\n"+"En seguida estableceremos una conexion con el para poder realizar el cargo..."+"\n"+
													"Banco 1: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion:"+ "XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
										}
									}
								}else {
									respuesta.setRespuesta("\n"+"La fecha ingresada es incorrecta"+"\n"+"Por favor, ingrese una fecha que este dentro del formato permitido (mmaa)");
								}
							}else {
								if(peticion.getCaducidad().length()<4) {
									respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener 4 dígitos (mm/aa)"+"\n");
								}else {
									if(peticion.getCaducidad().length()>4) {
										respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener sólo 4 dígitos(mm/aa)"+"\n");
									}
								}
							}
						}else {
							respuesta.setRespuesta("\n"+"La fecha de caducidad debe ser introducidad en datos numéricos, iniciando por el mes (mm) y seguido por el año (aa)."+"\n");
						}
						//Verifica si el rango de tarjeta pertenecen al banco dos, de ser así se hace una simulación de que se está comunicando con dicho banco
					}else if(i>=3250 && i<=5499) {
						//Se realizan todos los pasos de validación descritos en el modulo anterior
						if(peticion.getCaducidad().matches("[0-9]*")) {
							if(peticion.getCaducidad().length()==4) {
								int o= Integer.parseInt(peticion.getCaducidad().substring(0,2));
								int u= Integer.parseInt(peticion.getCaducidad().substring(2, 4));
								if((o<13 && o>0)&&(u>0 && u<100)) {
									if(o<4 && u==20) {
										respuesta.setRespuesta("\n"+"Su tarjeta se encuentra caducada"+"\n"+"Por favor acuda a su banco más cercano para una renovación"+"\n");
									}else {
										String cvv= String.valueOf(peticion.getCvv());
										if(cvv.length()<3 || cvv.length()>3) {
											respuesta.setRespuesta("\n"+"El código cvv sólo está compuesto por 3 digitos numéricos, ingrese correctamente el cvv"+"\n");
										}else {
											respuesta.setRespuesta("\n"+
													"Cargo en proceso..." +"\n"+ "La tarjeta: "+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco."+"\n"+"En seguida estableceremos una conexion con el para poder realizar el cargo..."+"\n"+
													"Banco 2: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
										}
									}
								}else {
									respuesta.setRespuesta("\n"+"La fecha ingresada es incorrecta"+"\n"+"Por favor, ingrese una fecha que este dentro del formato permitido (mmaa)");
								}
							}else {
								if(peticion.getCaducidad().length()<4) {
									respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener 4 dígitos (mm/aa)"+"\n");
								}else {
									if(peticion.getCaducidad().length()>4) {
										respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener sólo 4 dígitos(mm/aa)"+"\n");
									}
								}
							}
						}else {
							respuesta.setRespuesta("\n"+"La fecha de caducidad debe ser introducidad en datos numéricos, iniciando por el mes (mm) y seguido por el año (aa)."+"\n");
						}
						//Verifica si el rango de tarjeta pertenecen al banco dos, de ser así se hace una simulación de que se está comunicando con dicho banco
					}else if(i>=7750 && i<= 9999) {
						//Se realizan todos los pasos de validación descritos en el modulo anterior
						if(peticion.getCaducidad().matches("[0-9]*")) {
							if(peticion.getCaducidad().length()==4) {
								int o= Integer.parseInt(peticion.getCaducidad().substring(0,2));
								int u= Integer.parseInt(peticion.getCaducidad().substring(2, 4));
								if((o<13 && o>0)&&(u>0 && u<100)) {
									if(o<4 && u==20) {
										respuesta.setRespuesta("\n"+"Su tarjeta se encuentra caducada"+"\n"+"Por favor acuda a su banco más cercano para una renovación"+"\n");
									}else {
										String cvv= String.valueOf(peticion.getCvv());
										if(cvv.length()<3 || cvv.length()>3) {
											respuesta.setRespuesta("\n"+"El código cvv sólo está compuesto por 3 digitos numéricos, ingrese correctamente el cvv"+"\n");
										}else {
											respuesta.setRespuesta("\n"+
													"Cargo en proceso..." +"\n"+ "La tarjeta: "+ peticion.getTarjeta().substring(12, 16)+ " pertenece a otro banco."+"\n"+"En seguida estableceremos una conexion con el para poder realizar el cargo..."+"\n"+
													"Banco 4: Se ha realizado un cargo a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $"+ peticion.getMonto()  +".00 con número de autorización");
										}
									}
								}else {
									respuesta.setRespuesta("\n"+"La fecha ingresada es incorrecta"+"\n"+"Por favor, ingrese una fecha que este dentro del formato permitido (mmaa)");
								}
							}else {
								if(peticion.getCaducidad().length()<4) {
									respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener 4 dígitos (mm/aa)"+"\n");
								}else {
									if(peticion.getCaducidad().length()>4) {
										respuesta.setRespuesta("\n"+"La fecha de caducidad debe contener sólo 4 dígitos(mm/aa)"+"\n");
									}
								}
							}
						}else {
							respuesta.setRespuesta("\n"+"La fecha de caducidad debe ser introducidad en datos numéricos, iniciando por el mes (mm) y seguido por el año (aa)."+"\n");
						}
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
	
	/**
	 *  Método para realizar un reembolso
	 * @param peticion
	 * @return mensaje "Se ha realizado un reembolso..."
	 */
	@PayloadRoot(namespace="http://cobrar.me/Banco", 
			localPart="ReembolsoRequest")
	
	@ResponsePayload
	public ReembolsoResponse getReembolso(@RequestPayload ReembolsoRequest peticion) {
		ReembolsoResponse respuesta = new ReembolsoResponse();
		//Se realizan las mismas sentencias de verificación para la informción correcta anteriormente descritas
		if(peticion.getTarjeta().length()==16) {
			if(peticion.getTarjeta().matches("[0-9]*")) {
				int i = Integer.parseInt(peticion.getTarjeta().substring(0, 4));
				if(i>= 5500 && i<= 7749) {
					OperacionDAO reembolso= new OperacionDAO(peticion.getTarjeta(), peticion.getMonto());
					//Se manda a llamar al método realizar reembolso, que lo que hace es eliminar de la tabla pagos aquel registro que coincida con el numero de tarjeta y el monto ingresados
					if(reembolso.realizarReembolso()) {
						respuesta.setRespuesta("\n"+"Banco 3: Se ha realizado un reembolso a la tarjeta ejecutiva con terminacion: "+"XXXX-XXXX-XXXX-"+ peticion.getTarjeta().substring(12, 16) + " por la cantidad de: $" + peticion.getMonto() + ".00 \n Gracias por su confianza");
					}else {
						respuesta.setRespuesta("\n"+"No existe un pago registrado con dichos datos, comprueba que los campos ingresados son los correctos"+"\n");
					}
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
