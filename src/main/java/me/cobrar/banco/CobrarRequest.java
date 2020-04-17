//
// Este archivo ha sido generado por la arquitectura JavaTM para la implantación de la referencia de enlace (JAXB) XML v2.2.7 
// Visite <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Todas las modificaciones realizadas en este archivo se perderán si se vuelve a compilar el esquema de origen. 
// Generado el: 2020.04.16 a las 08:15:16 PM CDT 
//


package me.cobrar.banco;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para anonymous complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="tarjeta" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="caducidad" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="cvv" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="monto" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "tarjeta",
    "caducidad",
    "cvv",
    "monto"
})
@XmlRootElement(name = "CobrarRequest")
public class CobrarRequest {

    @XmlElement(required = true)
    protected String tarjeta;
    @XmlElement(required = true)
    protected String caducidad;
    protected int cvv;
    protected int monto;

    /**
     * Obtiene el valor de la propiedad tarjeta.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTarjeta() {
        return tarjeta;
    }

    /**
     * Define el valor de la propiedad tarjeta.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTarjeta(String value) {
        this.tarjeta = value;
    }

    /**
     * Obtiene el valor de la propiedad caducidad.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCaducidad() {
        return caducidad;
    }

    /**
     * Define el valor de la propiedad caducidad.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCaducidad(String value) {
        this.caducidad = value;
    }

    /**
     * Obtiene el valor de la propiedad cvv.
     * 
     */
    public int getCvv() {
        return cvv;
    }

    /**
     * Define el valor de la propiedad cvv.
     * 
     */
    public void setCvv(int value) {
        this.cvv = value;
    }

    /**
     * Obtiene el valor de la propiedad monto.
     * 
     */
    public int getMonto() {
        return monto;
    }

    /**
     * Define el valor de la propiedad monto.
     * 
     */
    public void setMonto(int value) {
        this.monto = value;
    }

}
