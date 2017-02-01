package reefbookjs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

/**
 * Created by serg on 18.04.16.
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"reefbookjs.controller", "reefbookjs.service.impl"})
@Import({SpringDBConfig.class})

public class SpringMVCConfig extends WebMvcConfigurerAdapter
{

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry)
  {
    registry.addResourceHandler("**").addResourceLocations("**");
  }

  @Bean
  public InternalResourceViewResolver setupViewResolver()
  {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setViewClass(JstlView.class);

    return resolver;
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry)
  {
    registry.addViewController("/"); //("/")
  }
}