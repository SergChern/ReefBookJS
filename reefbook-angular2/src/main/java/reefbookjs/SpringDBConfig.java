package reefbookjs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * Created by serg on 18.04.16.
 */
@Configuration
@EnableTransactionManagement
@PropertySource(value={"classpath:datasource.properties","classpath:application.properties",
        "${override.properties}"})
@EnableJpaRepositories("reefbookjs.repository")
public class SpringDBConfig
{
  @Value("${jdbc.driverClassName}")
  private String driverClassName;
  @Value("${jdbc.url}")
  private String url;
  @Value("${jdbc.username}")
  private String userName;
  @Value("${jdbc.password}")
  private  String password;

  @Value("${persistenceUnitName:reefbookcoreUnit}")
  private  String persistenceUnitName;
  @Value("${packagesToScan:reefbookjs.model}")
  private  String packagesToScan;

  @Value("${hibernate.hbm2ddl.auto:validate}")
  private  String hibernateHbm2DdlAuto;
  @Value("${hibernate.dialect:org.hibernate.dialect.FirebirdDialect}")
  private  String hibernateDialect;
  @Value("${hibernate.show_sql:false}")
  private  String hibernateShowSql;
  @Value("${hibernate.format_sql:true}")
  private  String hibernateFormatSql;

  @Bean
  public DataSource dataSource()
  {
    DriverManagerDataSource dataSource = new DriverManagerDataSource();

    dataSource.setDriverClassName(driverClassName);
    dataSource.setUrl(url);
    dataSource.setUsername(userName);
    dataSource.setPassword(password);

    return dataSource;
  }

  @Bean
  public LocalContainerEntityManagerFactoryBean entityManagerFactory()
  {
    LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
    entityManagerFactoryBean.setDataSource(dataSource());
    entityManagerFactoryBean.setPersistenceUnitName(persistenceUnitName);
    entityManagerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());

    entityManagerFactoryBean.setPackagesToScan(packagesToScan);
    entityManagerFactoryBean.setJpaProperties(jpaProperties());

    return entityManagerFactoryBean;
  }

  private Properties jpaProperties()
  {
    Properties properties = new Properties();
    properties.setProperty("hibernate.hbm2ddl.auto", hibernateHbm2DdlAuto); // create
    properties.setProperty("hibernate.dialect", hibernateDialect);
    properties.setProperty("hibernate.show_sql", hibernateShowSql);
    properties.setProperty("hibernate.format_sql", hibernateFormatSql);
    return properties;
  }

  @Bean
  public JpaTransactionManager transactionManager()
  {
    JpaTransactionManager transactionManager = new JpaTransactionManager();
    transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
    transactionManager.setDataSource(dataSource());

    return transactionManager;
  }
}