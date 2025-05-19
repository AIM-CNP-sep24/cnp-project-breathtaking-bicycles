package com.breathtakingbicycles.domein;

public class BenodigdheidInvoerData {
    public String imgsrc;
    public String naam;

    public BenodigdheidInvoerData(String imgsrc, String naam) {
        this.imgsrc = imgsrc;
        this.naam = naam;
    }

    public String getImgsrc() {
        return imgsrc;
    }

    public void setImgsrc(String imgsrc) {
        this.imgsrc = imgsrc;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    @Override
    public String toString() {
        return "BenodigdheidInvoerData{" +
                ", imgsrc='" + imgsrc + '\'' +
                ", naam='" + naam + '\'' +
                '}';
    }
}
