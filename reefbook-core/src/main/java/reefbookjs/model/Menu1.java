package reefbookjs.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.SequenceGenerator;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * Created by serg on 19.09.16.
 */
@Entity
@Table(name = "MENU1")
@NamedStoredProcedureQueries(value = {
        @NamedStoredProcedureQuery(
                name = "menuRoute",
       //         resultClasses = Menu2.class,
                procedureName = "YES_MENU",
                parameters = {
                        @StoredProcedureParameter(name = "ROL_USER", mode = ParameterMode.IN, type = String.class),
                        @StoredProcedureParameter(name = "ID_LANG", mode = ParameterMode.IN,type = Integer.class),
                        @StoredProcedureParameter(name = "ID", mode = ParameterMode.OUT, type = Integer.class),
                        @StoredProcedureParameter(name = "NPP", mode = ParameterMode.OUT, type = String.class),
                        @StoredProcedureParameter(name = "Name", mode = ParameterMode.OUT, type = String.class),
                        @StoredProcedureParameter(name = "IMT", mode = ParameterMode.OUT, type = String.class),
                        @StoredProcedureParameter(name = "SHORTCUT", mode = ParameterMode.OUT, type = String.class)
                }
        )
})
public class Menu1 implements Serializable
{
  private static final long serialVersionUID = 2L;
  private Integer id;
  private String key;
  private String item;
  private String imt;
  private String elekr;
  private String rowTag;
  private String shrtCut;

  @Id
  //@GeneratedValue(strategy = GenerationType.IDENTITY)
  @SequenceGenerator( name = "MENU1_SEQUENCE", sequenceName = "GEN_MENU_REL_ID")
  @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "MENU1_SEQUENCE" )
  @Column(name = "ID", nullable = false)
  public Integer getId()
  {
    return id;
  }

  public void setId(Integer id)
  {
    this.id = id;
  }

  @Size(max = 3)
  @Column(name = "IMT", nullable = false)
  public String getImt()
  {
    return imt;
  }

  public void setImt(String imt)
  {
    this.imt = imt;
  }

  @Size(max = 30)
  @Column(name = "ITEM", nullable = false)
  public String getItem()
  {
    return item;
  }

  public void setItem(String item)
  {
    this.item = item;
  }

  @Size(max = 30)
  @Column(name = "KEY", nullable = false)
  public String getKey()
  {
    return key;
  }

  public void setKey(String key)
  {
    this.key = key;
  }

  @Size(max = 20)
  @Column(name = "ELEKR", nullable = false)
  public String getElekr()
  {
    return elekr;
  }

  public void setElekr(String elekr)
  {
    this.elekr = elekr;
  }

  @Size(max = 100)
  @Column(name = "ROWTAG", nullable = false)
  public String getrowTag() {return rowTag;}

  public void setRowTag(String rowTag) {this.rowTag=rowTag;}

  @Size(max = 15)
  @Column(name = "SHRTCUT", nullable = false)
  public String getShrtCut() {return shrtCut;}

  public void setShrtCut(String shrtCut) {this.shrtCut=shrtCut;}

  public Menu1()
  {
  }

  public Menu1(Integer id, String key, String item, String imt, String elekr,
          String rowTag, String shrtCut)
  {
    this.id = id;
    this.key=key;
    this.item=item;
    this.imt=imt;
    this.elekr=elekr;
    this.rowTag=rowTag;
    this.shrtCut=shrtCut;
  }
}
