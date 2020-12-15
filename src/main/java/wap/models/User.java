package wap.models;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String role;
  private String first_name;
  private String last_name;


  public Integer getId() {
    return id;
  }

  public void setId(Integer studentId) {
    this.id = id;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public String getFirst_name() {
    return first_name;
  }

  public void setFirst_name(String first) {
    this.first_name = first_name;
  }

  public String getLast_name() {
    return last_name;
  }

  public void setLast_name(String last_name) {
    this.last_name = last_name;
  }
}
