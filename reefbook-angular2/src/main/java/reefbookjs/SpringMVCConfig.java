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
/*    registry.addResourceHandler("**").addResourceLocations("**");

    if (!registry.hasMappingForPattern("/webjars/**")) {
      registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
    }

    if (!registry.hasMappingForPattern("/images/**")) {
      registry.addResourceHandler("/images/**").addResourceLocations("classpath:/images/");
    }
    if (!registry.hasMappingForPattern("/css/**")) {
      registry.addResourceHandler("/css/**").addResourceLocations("classpath:/css/");
    }
    if (!registry.hasMappingForPattern("/js/**")) {
      registry.addResourceHandler("/js/**").addResourceLocations("classpath:/js/");
    }
    */
    if (!registry.hasMappingForPattern("/app/**")) {
      registry.addResourceHandler("/app/**").addResourceLocations("classpath:/app/");
    }
    if (!registry.hasMappingForPattern("/node_modules/**")) {
      registry.addResourceHandler("/node_modules/**").addResourceLocations("classpath:/app/node_modules/");
    }
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