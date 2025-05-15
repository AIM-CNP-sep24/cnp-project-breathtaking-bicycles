package com.breathtakingbicycles.domein;

public class Benodigdheid {
    public int id;
    public String naamTaal1;
    public String naamTaal2;
    public int parentId;
    public int laag;
    public int rangnr;
    public String imgsrc;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNaamTaal1() {
        return naamTaal1;
    }

    public void setNaamTaal1(String naamTaal1) {
        this.naamTaal1 = naamTaal1;
    }

    public String getNaamTaal2() {
        return naamTaal2;
    }

    public void setNaamTaal2(String naamTaal2) {
        this.naamTaal2 = naamTaal2;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public int getLaag() {
        return laag;
    }

    public void setLaag(int laag) {
        this.laag = laag;
    }

    public int getRangnr() {
        return rangnr;
    }

    public void setRangnr(int rangnr) {
        this.rangnr = rangnr;
    }

    public String getImgsrc() {
        return imgsrc;
    }

    public void setImgsrc(String imgsrc) {
        this.imgsrc = imgsrc;
    }

    @Override
    public String toString() {
        return "Benodigdheid{" +
                "id=" + id +
                ", naamTaal1='" + naamTaal1 + '\'' +
                ", naamTaal2='" + naamTaal2 + '\'' +
                ", parentId=" + parentId +
                ", laag=" + laag +
                ", rangnr=" + rangnr +
                ", imgsrc='" + imgsrc + '\'' +
                '}';
    }
}
