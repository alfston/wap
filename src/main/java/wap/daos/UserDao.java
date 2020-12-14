package wap.daos;

import wap.models.User;
import wap.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserDao {
  @Autowired
  UserRepository userRepository;
  @GetMapping("/findAllUsers")
  public Iterable<User> findAllUsers() {
    return userRepository.findAll();
  }
  @GetMapping("/findUserById/{id}")
  public User findUserById(
          @PathVariable("id") Integer id) {
    return userRepository.findById(id).get();
  }
  @GetMapping("/deleteUser/{id}")
  public void deleteMovie(
          @PathVariable("id") Integer id) {
    userRepository.deleteById(id);
  }
  @GetMapping("/createUser")
  public User createUser() {
    User user = new User();
    user.setRole("New Role");
    user.setFirst_name("New First Name");
    user.setLast_name("New Last Name");
    return userRepository.save(user);
  }
  @GetMapping("/renameUser/{id}/{newRole}")
  public User renameUser(
          @PathVariable("id") Integer id,
          @PathVariable("newRole") String newRole) {
    User user = userRepository.findById(id).get();
    user.setRole(newRole);
    return userRepository.save(user);
  }
}
