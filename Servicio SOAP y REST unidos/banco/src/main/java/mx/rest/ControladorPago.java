package mx.uv.rest;

//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@RestController 
public class ControladorPago {
	
	@GetMapping("/banco/pagos")
	public List<Pago> buscarPaguitos(){
		//JSONObject obj = new JSONObject();
		Pago saludar = new Pago();
		List<Pago> tar;
		tar = saludar.buscarPaguitos();
		List<Pago> resultado = new ArrayList<>();
		int i=0;
		for(Pago s: tar) {
			resultado.add(tar.get(i));
			i++;
		}
		//obj.put("tarjetas", resultado);
		//return obj;
		return resultado;
	}
	/*@PutMapping("/api/actualizaciones")
	public String actualizarPago(@RequestParam Map<String, String> variosParametros) {
		return "Las variables de la actualizacion de pago son: " + variosParametros.entrySet();
	}*/
}
