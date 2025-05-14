package com.breathtakingbicycles.domein;

import java.math.BigInteger;

public class BenodigdhedenOphaalData {
    public int id;
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
        return "BenodigdhedenOphaalData{" +
                ", id=" + id +
                ", parentId=" + parentId +
                ", laag=" + laag +
                ", rangnr=" + rangnr +
                ", imgsrc='" + imgsrc + '\'' +
                '}';
    }
}
