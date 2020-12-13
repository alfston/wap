package wap.daos;


import wap.models.Account;
import wap.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Iterator;

@Component
@RestController
public class AccountDao {
  @Autowired
  AccountRepository accountRepository;
  @GetMapping("/findAllAccounts")
  public Iterable<Account> findAllAccounts() {
    return accountRepository.findAll();
  }

  @GetMapping("/findAccountByNumber/{number}")
  public Account findAccountByNumber(
          @PathVariable("number") Integer number) {
    return accountRepository.findById(number).get();
  }
  @GetMapping("/deleteAccount/{number}")
  public void deleteAccount(
          @PathVariable("number") Integer number) {
    accountRepository.deleteById(number);
  }
  @GetMapping("/createAccount")
  public Account createAccount() {
    Account account = new Account();
    account.setState("Active");
    return accountRepository.save(account);
  }
  @GetMapping("/changeAccountState/{number}/{newState}")
  public Account changeAccountState(
          @PathVariable("number") Integer Number,
          @PathVariable("newState") String newState) {
    Account account = accountRepository.findById(Number).get();
    account.setState(newState);
    return accountRepository.save(account);
  }

  @GetMapping("/byLibrary/{number}")
  public Iterable<Account> byLibrary( @PathVariable("number") Integer number) {
    ArrayList<Account> loa = new ArrayList<>();
    for (Account a : accountRepository.findAll()) {
      if (a.getLibrary() == number) {
        loa.add(a);
      }
    }
    return loa;
  }

  @GetMapping("/byPatron/{number}")
  public Iterable<Account> byPatron( @PathVariable("number") Integer number) {
    ArrayList<Account> loa = new ArrayList<>();
    for (Account a : accountRepository.findAll()) {
      if (a.getPatron_id() == number) {
        loa.add(a);
      }
    }
    return loa;
  }
}
