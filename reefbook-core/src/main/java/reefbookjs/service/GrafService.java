package reefbookjs.service;

import reefbookjs.model.Graf;

import java.util.List;

/**
 * Created by serg on 29.11.16.
 */
public interface GrafService
{
  List<Graf> getAllGraf();

  List getGoImt(String imt);

  List<Graf> getFiltrImt(String imt);

  Graf grafPut(Graf entity);

  Graf grafPost(Graf entity);

  Graf grafPatch(Graf entity) throws Exception;

  Graf grafFindOne(Integer id);

  String grafDelete(int id);
}
