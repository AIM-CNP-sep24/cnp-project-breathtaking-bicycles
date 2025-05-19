package com.breathtakingbicycles.domein;

public class Taal {
    public int id;
    public String naam;
    public String code;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "Taal{" +
                "id=" + id +
                ", naam='" + naam + '\'' +
                ", code='" + code + '\'' +
                '}';
    }
}
