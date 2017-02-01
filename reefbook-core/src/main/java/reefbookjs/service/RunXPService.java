package reefbookjs.service;

import reefbookjs.model.Menu1;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by serg on 29.11.16.
 */
public interface RunXPService
{
  EntityManager getEntityManager();
  List<Menu1> getAllMenu1();
}
