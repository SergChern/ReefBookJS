package reefbookjs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

/**
 * This class replaces the "old" web.xml and is automatically scanned at the application startup
 */
@Configuration
public class WebAppInitializer implements WebApplicationInitializer
{
  @Override
  public void onStartup(ServletContext servletContext) throws ServletException
  {
    AnnotationConfigWebApplicationContext rootCtx = new AnnotationConfigWebApplicationContext();
    servletContext.addListener(new ContextLoaderListener(rootCtx));
    rootCtx.register(SpringMVCConfig.class);
    addStaticHtmlFilesHandlingServlet(servletContext);
    addSpringDispatcherServlet(servletContext, rootCtx);

    rootCtx.setServletContext(servletContext);
  }
  private void addSpringDispatcherServlet(ServletContext servletContext, WebApplicationContext context)
  {
    ServletRegistration.Dynamic dispatcher = servletContext.addServlet("DispatcherServlet",
            new DispatcherServlet(context));
    dispatcher.setLoadOnStartup(2);
    dispatcher.addMapping("/reefbook1/*"); // reefbook1/* JBOSS
    dispatcher.setInitParameter("throwExceptionIfNoHandlerFound", "true");
  }

  private void addStaticHtmlFilesHandlingServlet(ServletContext servletContext)
  {
    ServletRegistration.Dynamic servlet = servletContext.addServlet("HtmlServlet", new StaticFilesServlet()); // org.apache.jasper.servlet.JspServlet
    servlet.setLoadOnStartup(1);
    servlet.addMapping("/index.html");
  }
}