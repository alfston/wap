package wap.models;
import javax.persistence.*;

@Entity
@Table(name="patrons")
public class Patron {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String address;
  private String phone_number;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getphone_number() {
    return phone_number;
  }

  public void setphone_number(String phone_number) {
    this.phone_number = phone_number;
  }

}
