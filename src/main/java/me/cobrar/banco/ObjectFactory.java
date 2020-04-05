//
// Este archivo ha sido generado por la arquitectura JavaTM para la implantación de la referencia de enlace (JAXB) XML v2.2.7 
// Visite <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Todas las modificaciones realizadas en este archivo se perderán si se vuelve a compilar el esquema de origen. 
// Generado el: 2020.04.02 a las 07:10:47 PM CST 
//


package me.cobrar.banco;

import javax.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the me.cobrar.banco package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {


    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: me.cobrar.banco
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ReembolsoResponse }
     * 
     */
    public ReembolsoResponse createReembolsoResponse() {
        return new ReembolsoResponse();
    }

    /**
     * Create an instance of {@link CobrarResponse }
     * 
     */
    public CobrarResponse createCobrarResponse() {
        return new CobrarResponse();
    }

    /**
     * Create an instance of {@link ReembolsoRequest }
     * 
     */
    public ReembolsoRequest createReembolsoRequest() {
        return new ReembolsoRequest();
    }

    /**
     * Create an instance of {@link CobrarRequest }
     * 
     */
    public CobrarRequest createCobrarRequest() {
        return new CobrarRequest();
    }

}
