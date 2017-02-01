package reefbookjs.controller;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import reefbookjs.Menu2;
import reefbookjs.model.Menu1;

import javax.persistence.StoredProcedureQuery;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Created by serg on 20.09.16.
 */
@Controller
public class DataModule
{
  private int item2, npp;
  private Menu2 menu2;
  private List<Menu2> result2;
  private List<Menu1> result1;
  private StringBuilder tags = new StringBuilder();

  public DataModule()
  {
  }

  public List<Menu1> menuView(StoredProcedureQuery query)
  {
    this.result2 = (List<Menu2>) query.getResultList().stream()
            .map(p -> new Menu2(p))
            .collect(Collectors.toList());
    item2 = -1;
    tags.delete(0, tags.length());
    result1 = new ArrayList<>();
// Формируем Главное меню
    while (nextItemMenu() == 1)
    {
      InsMenu(npp);
    }
    return result1;
  }

  private int nextItemMenu()
  {
    item2++;
    if (item2 < result2.size())
    {
      menu2 = result2.get(item2);
      return npp = menu2.getNpp().indexOf("0");
    }
    return 0;
  }

  private void InsItem(int curLevel)
  {
    if (menu2.getName().startsWith("-"))
    {
      int beforeI = result1.size() - 1;
      result1.get(beforeI).setRowTag(result1.get(beforeI).getrowTag().
              replaceAll("<a ", "<a class='delimiter' ").concat(tags.toString()));
      tags.delete(0, tags.length());
    } else
    {
      addItem(menu2.getName());
    }

    nextItemMenu();
    if (npp > curLevel)
    {
      tags.append("<ul>");
      InsMenu(npp);
      tags.append("</ul>");
    }
  }

  private void InsMenu(int curLevel)
  {
    addItem(menu2.getName());
    nextItemMenu();
    if (npp == 1)
    {
      tags.append("</li>");
      item2--;
    } else if (npp > curLevel)
    {
      tags.append("<ul>");
      fillSubMenu(curLevel + 1);
      tags.append("</ul></li>");
      if (npp == 1)
      {
        item2--;
      }
    } else if (npp == curLevel)
    {
      fillSubMenu(curLevel);
    }
  }

  private void addItem(String sname)
  {
    String sHCut = StringUtils.isNotEmpty(menu2.getShortcut())? menu2.getShortcut() : null;
    String tImt = "T".concat(Optional.ofNullable(menu2.getImt()).orElse("null"));
    String nameItem = StringUtils.isNotEmpty(sHCut) ?
            String.format("<li><a href=\"%s\">%s (клав. %s)</a>", tImt, sname, sHCut) :
            String.format("<li><a href=\"%s\">%s</a>", tImt, sname);

    result1.add(new Menu1(menu2.getId(), tImt, "R".concat(menu2.getNpp()), menu2.getImt(),
            "#main", tags.toString().concat(nameItem), sHCut));
    tags.delete(0, tags.length());
  }

  private void fillSubMenu(int curLevel)
  {
    do
    {
      InsItem(npp);
      tags.append("</li>");
    } while (npp == curLevel);
  }

}