package reefbookjs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import reefbookjs.model.Graf;

import java.util.List;

/**
 * Created by serg on 13.04.16.
 */
public interface GrafRepository extends JpaRepository<Graf, Integer>
{
  @Query("select g from Graf g where g.imt = :imt and g.mask like '%15,%'")
  List<Graf> findByImt(@Param("imt") String imt);
  @Query("select g from Graf g where g.imt LIKE '%00%'")
  List<Graf> FiltrImt(); // @Param("imt") String imt
}