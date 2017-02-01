package reefbookjs.controller;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import reefbookjs.model.Graf;
import reefbookjs.model.Menu1;
import reefbookjs.service.impl.GrafServiceImpl;
import reefbookjs.service.impl.RunXPServiceImpl;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by serg on 13.04.16.
 */
@RestController
public class GrafController
{
  @Inject
  private GrafServiceImpl grafServiceImpl;
  @Inject
  private RunXPServiceImpl runXPServiceImpl;

  @RequestMapping(value = "/home", method = RequestMethod.GET)
  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = true, propagation= Propagation.SUPPORTS)
  public List<Graf> getAllGraf()
  {
    return grafServiceImpl.getAllGraf();
  }

  @RequestMapping(value = "/go/{imt}", method = RequestMethod.GET)
  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = true, propagation= Propagation.SUPPORTS)
  public List getGoImt(@PathVariable("imt") String imt)
  {
    return grafServiceImpl.getGoImt(imt);
  }

  @RequestMapping(value = "filtr/{imt}", method = RequestMethod.GET)
  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = true, propagation= Propagation.SUPPORTS)
  public List<Graf> getFiltrImt(@PathVariable("imt") String imt)
  {
    return grafServiceImpl.getFiltrImt(imt);
  }

  @RequestMapping(value = "/graf/id={id}", method = RequestMethod.PUT)
  @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = false, propagation= Propagation.REQUIRES_NEW, rollbackFor=Exception.class)
  public Graf grafPut(@RequestBody Graf entity)
  {
    return grafServiceImpl.grafPut(entity);
  }

  @RequestMapping(value = "/grafins", method = RequestMethod.POST)
  @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = false, propagation= Propagation.REQUIRES_NEW, rollbackFor=Exception.class)
  public Graf grafPost(@RequestBody Graf entity)
  {
    return grafServiceImpl.grafPost(entity);
  }

  @RequestMapping(value = "/graf/id={id}", method = RequestMethod.PATCH)
  @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = false, propagation= Propagation.REQUIRES_NEW, rollbackFor=Exception.class)
  public Graf grafPatch(@RequestBody Graf entity) throws Exception
  {
      return grafServiceImpl.grafPatch(entity);

  }

  @RequestMapping(value = "/graf/id={id}", method = RequestMethod.DELETE)
  @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = false, propagation= Propagation.REQUIRES_NEW, rollbackFor=Exception.class)
  public String grafDelete(@PathVariable("id") int id)
  {
    return grafServiceImpl.grafDelete(id);
  }

  @RequestMapping(value = "/routemenu", method = RequestMethod.GET)
  @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
  @Transactional(readOnly = true, propagation= Propagation.SUPPORTS)
  public List<Menu1> getAllMenu1()
  {
    return  runXPServiceImpl.getAllMenu1();
  }
}