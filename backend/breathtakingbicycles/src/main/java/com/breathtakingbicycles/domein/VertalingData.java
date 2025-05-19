package com.breathtakingbicycles.domein;

public class VertalingData {
    public int taalId;
    public int benodigdeidId;
    public String tekst;

    public int getTaalId() {
        return taalId;
    }

    public void setTaalId(int taalId) {
        this.taalId = taalId;
    }

    public int getBenodigdeidId() {
        return benodigdeidId;
    }

    public void setBenodigdeidId(int benodigdeidId) {
        this.benodigdeidId = benodigdeidId;
    }

    public String getTekst() {
        return tekst;
    }

    public void setTekst(String tekst) {
        this.tekst = tekst;
    }

    @Override
    public String toString() {
        return "VertalingData{" +
                "taalId='" + taalId +
                ", benodigdeidId=" + benodigdeidId +
                ", tekst='" + tekst + '\'' +
                '}';
    }
}
