package reefbookjs;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by serg on 19.04.16.
 */
public class StaticFilesServlet extends HttpServlet
{
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
  {
    response.setCharacterEncoding("UTF-8");

    String resourcePath = request.getRequestURI();
    if (resourcePath != null)
    {
  //    URL fileResourceUrl = request.getServletContext().getResource(resourcePath);
      URL fileResourceUrl = request.getServletContext().getResource("/index.html");
      String filePath = fileResourceUrl.getPath();

      if (!new File(filePath).exists())
      {
        throw new IllegalArgumentException("Resource can not be found: ".concat(filePath));
      }
      if (!filePath.endsWith("/"))
      {
        Files.lines(Paths.get(filePath))
                .forEach(p -> {
                  try
                  {
                    response.getWriter().write(p);
                  } catch (IOException e)
                  {
                    e.printStackTrace();
                  }
                });
      }
    }
  }
}
