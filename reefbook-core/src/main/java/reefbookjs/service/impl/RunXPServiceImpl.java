package reefbookjs.service.impl;

import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Service;
import reefbookjs.controller.DataModule;
import reefbookjs.model.Menu1;
import reefbookjs.service.RunXPService;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.StoredProcedureQuery;
import java.util.List;

/**
 * Created by serg on 29.11.16.
 */
@Service
public class RunXPServiceImpl implements RunXPService
{
  @Inject
  private LocalContainerEntityManagerFactoryBean entityManagerFactoryBean;

  @Inject
  private DataModule dataModule;
  private EntityManager entityManager = null;

  public RunXPServiceImpl()
  {
  }

  @Override
  public EntityManager getEntityManager()
  {
    return entityManager = (entityManager == null) ? entityManagerFactoryBean.getNativeEntityManagerFactory()
            .createEntityManager() : entityManager;
  }

  @Override
  public List<Menu1> getAllMenu1()
  {
    StoredProcedureQuery query = getEntityManager().createNamedStoredProcedureQuery("menuRoute");
    query.setParameter("ROL_USER", "15,999,").setParameter("ID_LANG", 1).execute();

    List<Menu1> result = dataModule.menuView(query);
    return result;
  }
}
