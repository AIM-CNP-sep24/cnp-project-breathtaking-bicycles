package com.breathtakingbicycles.domein;

public class BenodigdheidOphaalData {
    public int parentId;
    public String taal1;

    public String taal2;

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
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
        return "BenodigdheidOphaalData{" +
                "parentId=" + parentId +
                ", taal1='" + taal1 + '\'' +
                ", taal2='" + taal2 + '\'' +
                '}';
    }
}
