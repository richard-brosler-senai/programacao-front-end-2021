package testsFront;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class PageHome {
	public WebDriver driver;
	
	@Before
	public void preparacaoPesquisa() {
		System.setProperty("webdriver.chrome.driver", 
				System.getenv("Driver"));
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.get("https://online.sp.senai.br");
		driver.manage().window().maximize();
	}
	
	@Test
	public void testNavegarPaginaHome() {
		driver.findElement(By.xpath("//*[@id=\"nav\"]/li[3]/a/span")).click();
		driver.findElement(By.id("MenuLateral_rptMenuEscola_rptSubMenu_1_lnkSubMenu_1")).click();
		
		//opcEletricistaIndustrial();
		opcProgramadorFrontEnd();
		
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(1));
		driver.findElement(By.className("btn-danger")).click();
		driver.findElement(By.id("MainContent_ExRdbLGPD")).click();
		driver.switchTo().frame(0);
		driver.findElement(By.className("recaptcha-checkbox-border")).click();
		driver.switchTo().defaultContent();
		driver.findElement(By.id("ButtonVotar")).click();
	}
	
	public void opcProgramadorFrontEnd() {
		driver.findElement(By.id("ctl00_cp_rptSegmArea_ctl00_rptCursos_ctl16_rptRegi_ctl03_rptEsco_ctl00_lnkEscolaBtn")).click();
	}
	
	public void opcEletricistaIndustrial() {
		driver.findElement(By.id("ctl00_cp_rptSegmArea_ctl00_rptCursos_ctl09_rptRegi_ctl01_rptEsco_ctl01_lnkEscola")).click();
	}
	@After
	public void finalizandoTestes() {
		//driver.close();
	}
}
