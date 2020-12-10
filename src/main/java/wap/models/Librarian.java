package wap.models;
import javax.persistence.*;

@Entity
@Table(name="librarian")          //test comment
public class Librarian{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String position;
  private Integer libraryID ;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getPosition() {
    return position;
  }

  public void setPosition(String position) {
    this.position = position;
  }

  public Integer getLibraryID() {
    return libraryID;
  }

  public void setLibraryID(Integer libraryID) {
    this.libraryID = libraryID;
  }

}
