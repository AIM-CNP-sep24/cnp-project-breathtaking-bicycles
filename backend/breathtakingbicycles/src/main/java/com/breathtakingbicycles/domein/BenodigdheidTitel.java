package com.breathtakingbicycles.domein;

public class BenodigdheidTitel {
    public int id;
    public String taal1;
    public String taal2;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTaal1() {
        return taal1;
    }

    public void setTaal1(String taal1) {
        this.taal1 = taal1;
    }

    public String getTaal2() {
        return taal2;
    }

    public void setTaal2(String taal2) {
        this.taal2 = taal2;
    }

    @Override
    public String toString() {
        return "BenodigdheidTitel{" +
                "id=" + id +
                ", taal1='" + taal1 + '\'' +
                ", taal2='" + taal2 + '\'' +
                '}';
    }
}
