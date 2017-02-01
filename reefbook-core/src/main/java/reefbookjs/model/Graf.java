package reefbookjs.model;

/**
 * Created by serg on 09.09.16.
 */

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

/**
 * Created by serg on 13.04.16.
 */
@Entity
@EntityListeners({GrafListener.class})
@Table(name = "GRAF")
public class Graf implements Serializable
{
  private static final long serialVersionUID = 2L;
  private Integer id;
  private String imt;
  private String rebro;
  private String oldRebro;
  private Integer npp;
  private String workload;
  private Date begDat;
  private Date endDat;
  private String mask;
  private Boolean pdel;  // short ??
  private Integer id_User; // idUser переделать потом ???
  private Timestamp dt;
  private Boolean m; //short m; ??

  @Id
 // @GeneratedValue(strategy = GenerationType.IDENTITY)
  @SequenceGenerator( name = "GRAF_SEQUENCE", sequenceName = "GEN_GRAF_ID")
  @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "GRAF_SEQUENCE" )
  @Column(name = "ID", nullable = false)
  public Integer getId()
  {
    return id;
  }

  public void setId(Integer id)
  {
    this.id = id;
  }

  @Size(max = 10)
  @Column(name = "IMT", nullable = false)
  public String getImt()
  {
    return imt;
  }

  public void setImt(String imt)
  {
    this.imt = imt;
  }

  @Size(max = 3000)
  @Column(name = "REBRO", nullable = false)
  public String getRebro()
  {
    return rebro;
  }

  public void setRebro(String rebro)
  {
    this.rebro = rebro;
  }

  @Column(name = "OLDREBRO", nullable = false)
  public String getOldRebro()
  {
    return oldRebro;
  }

  public void setOldRebro(String oldrebro)
  {
    this.oldRebro = oldrebro;
  }

  @Column(name = "NPP", nullable = false)
  public Integer getNpp()
  {
    return npp;
  }

  public void setNpp(Integer npp)
  {
    this.npp = npp;
  }

  @Size(max = 3000)
  @Column(name = "WORKLOAD", nullable = false)
  public String getWorkload()
  {
    return workload;
  }

  public void setWorkload(String workload)
  {
    this.workload = workload;
  }

  @Size(max = 100)
  @Column(name = "MASK", nullable = false)
  public String getMask()
  {
    return mask;
  }

  public void setMask(String mask)
  {
    this.mask = mask;
  }

  @Column(name = "ID_USER", nullable = false)
  public Integer getId_User()
  {
    return id_User;
  }

  public void setId_User(Integer id_User)
  {
    this.id_User = id_User;
  }

  @Column(name = "M", nullable = false)
  public Boolean isM()
  {
    return m;
  }

  public void setM(Boolean m)
  {
    this.m = m;
  }

  @Column(name = "PDEL", nullable = false)
  public Boolean isPdel()
  {
    return pdel;
  }

  public void setPdel(Boolean pdel)
  {
    this.pdel = pdel;
  }

  @Column(name = "BEGDAT", nullable = false)
  @Temporal(TemporalType.DATE)
  public Date getBegDat()
  {
    return begDat;
  }

  public void setBegDat(Date begDat)
  {
    this.begDat = begDat;
  }

  @Column(name = "ENDDAT", nullable = false)
  @Temporal(TemporalType.DATE)
  public Date getEndDat()
  {
    return endDat;
  }

  public void setEndDat(Date endDat)
  {
    this.endDat = endDat;
  }

  @Column(name = "DT", nullable = false)
  public Timestamp getDt()
  {
    return dt;
  }

  public void setDt(Timestamp dt)
  {
    this.dt = dt;
  }

  public Graf()
  {
  }

  public Graf(String imt,
                    String rebro,
                    Integer npp,
                    String workload,
                    String mask,
                    int id_User,
                    Boolean m,
                    Boolean pdel,
                    Date begDat,
                    Date endDat)
  {
    this.imt = imt;
    this.rebro = rebro;
    this.npp = npp;
    this.workload = workload;
    this.mask = mask;
    this.id_User = id_User;
    this.m = m;
    this.pdel = pdel;
    this.begDat = begDat;
    this.endDat = endDat;
  }

  @Override
  public int hashCode()
  {
    int result = id;
    result = 31 * result + (imt != null ? imt.hashCode() : 0);
    result = 31 * result + (rebro != null ? rebro.hashCode() : 0);
    result = 31 * result + (oldRebro != null ? oldRebro.hashCode() : 0);
    result = 31 * result + npp;
    result = 31 * result + (workload != null ? workload.hashCode() : 0);
    result = 31 * result + (begDat != null ? begDat.hashCode() : 0);
    result = 31 * result + (endDat != null ? endDat.hashCode() : 0);
    result = 31 * result + (mask != null ? mask.hashCode() : 0);
//    result = 31 * result + (int) pdel; // потом как быть может short
    result = 31 * result + (id_User != null ? id_User.hashCode() : 0);
    result = 31 * result + (dt != null ? dt.hashCode() : 0);
//    result = 31 * result + (int) m;  ....
    return result;
  }

  @Override
  public boolean equals(Object o)
  {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Graf that = (Graf) o;

    if (id != that.id) return false;
    if (npp != that.npp) return false;
    if (imt != null ? !imt.equals(that.imt) : that.imt != null) return false;
    if (rebro != null ? !rebro.equals(that.rebro) : that.rebro != null) return false;
    if (oldRebro != null ? !oldRebro.equals(that.oldRebro) : that.oldRebro != null) return false;
    if (workload != null ? !workload.equals(that.workload) : that.workload != null) return false;
    if (begDat != null ? !begDat.equals(that.begDat) : that.begDat != null) return false;
    if (endDat != null ? !endDat.equals(that.endDat) : that.endDat != null) return false;
    if (mask != null ? !mask.equals(that.mask) : that.mask != null) return false;
    if (id_User != null ? !id_User.equals(that.id_User) : that.id_User != null) return false;
    if (dt != null ? !dt.equals(that.dt) : that.dt != null) return false;

    return pdel.equals(that.pdel) ? m.equals(that.m): false;
  }

  @Override
  public String toString()
  {
    return String.format("Graf[ id=%s]",id);
  }
}