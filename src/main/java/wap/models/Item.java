package wap.models;

import javax.persistence.*;

  @Entity
  @Table(name="items")
  public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer barcode;
    private String ISBN;
    private String lang;
    private String format;
    private String borrowed;
    private String loanPeriod;
    private String dueDate;
    private Boolean isOverDue;

    public Integer getBarcode() {
      return barcode;
    }

    public void setBarcode(Integer barcode) {
      this.barcode = barcode;
    }

    public String getISBN() {
      return ISBN;
    }

    public void setISBN(String ISBN) {
      this.ISBN = ISBN;
    }

    public String getLang() {
      return lang;
    }

    public void setLang(String lang) {
      this.lang = lang;
    }

    public String getFormat() {
      return format;
    }

    public void setFormat(String format) {
      this.format = format;
    }

    public String getBorrowed() {
      return borrowed;
    }

    public void setBorrowed(String borrowed) {
      this.borrowed = borrowed;
    }

    public String getLoanPeriod() {
      return loanPeriod;
    }

    public void setLoanPeriod(String loanPeriod) {
      this.loanPeriod = loanPeriod;
    }

    public String getDueDate() {
      return dueDate;
    }

    public void setDueDate(String dueDate) {
      this.dueDate = dueDate;
    }

    public Boolean getOverDue() {
      return isOverDue;
    }

    public void setOverDue(Boolean overDue) {
      isOverDue = overDue;
    }
  }

