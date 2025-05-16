package com.breathtakingbicycles.domein;

public class BenodigdheidInvoerData {
    public int id;
    public String imgsrc;

    public BenodigdheidInvoerData(int id, String imgsrc) {
        this.id = id;
        this.imgsrc = imgsrc;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImgsrc() {
        return imgsrc;
    }

    public void setImgsrc(String imgsrc) {
        this.imgsrc = imgsrc;
    }

    @Override
    public String toString() {
        return "BenodigdheidInvoerData{" +
                "id=" + id +
                ", imgsrc='" + imgsrc + '\'' +
                '}';
    }
}
