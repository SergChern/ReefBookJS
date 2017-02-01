package reefbookjs.service.impl;

import org.springframework.stereotype.Service;
import reefbookjs.model.Graf;
import reefbookjs.repository.GrafRepository;
import reefbookjs.service.GrafService;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by serg on 29.11.16.
 */
@Service
public class GrafServiceImpl implements GrafService
{
  @Inject
  private GrafRepository grafrepository;

  @Override
  public List<Graf> getAllGraf()
  {
    return grafrepository.findAll();
  }

  @Override
  public List getGoImt(String imt)
  {
    Map<String, String> mapImt = grafrepository.findByImt(imt).stream()
            .collect(Collectors.toMap(graf -> graf.getRebro(),
                    graf -> graf.getWorkload().replaceAll("\\n", "")));

    return new ArrayList(mapImt.entrySet());
  }

  @Override
  public List<Graf> getFiltrImt(String imt)
  {
    List<Graf> result = grafrepository.FiltrImt(); //imt
    return result;
  }

  @Override
  public Graf grafPut(Graf entity)
  {
    return grafrepository.save(entity);
  }

  @Override
  public Graf grafPost(Graf entity)
  {
    if (entity.getDt() == null)
    {
      entity.setDt(new java.sql.Timestamp(new Date().getTime()));
    }
    return grafrepository.saveAndFlush(entity);
  }

  @Override
  public Graf grafPatch(Graf entity) throws Exception
  {
    return grafrepository.save(entity);
  }

  @Override
  public Graf grafFindOne(Integer id)
  {
    return grafrepository.findOne(id);
  }

  @Override
  public String grafDelete(int id)
  {
    grafrepository.delete(id);
    return "redirect:/items";
  }
}
