package reefbookjs.model;

import javax.persistence.PrePersist;
import java.util.Date;

/**
 * Created by serg on 16.09.16.
 */
public class GrafListener
{
  @PrePersist
  public void prePersist(Graf graf)
  {
    graf.setBegDat(new Date());
    graf.setEndDat(new Date());
  }
}
