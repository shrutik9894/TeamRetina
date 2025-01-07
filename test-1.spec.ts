import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //website open
  await page.goto('https://webapp.simulationhub.com/simulation-gallery');
  console.log("website has been opened");

  //gallery icon 
  page.waitForTimeout(4000);

  await page.locator("body > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)").click();
  console.log("Gallery icon is clicked");

  //hvac diagram selection 

  await page.locator('#e0Xo9YN').click();
  console.log("a model is selected");
  page.waitForTimeout(4000);

  //design selection 
  
  await page.locator("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > foreignobject:nth-child(2) > div:nth-child(1)").click();
  console.log("heating icon is selected");

  page.waitForTimeout(5000);

  await page.locator("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(3) > foreignobject:nth-child(2) > div:nth-child(1)").click();
  console.log("cooling is selected ");

  page.waitForTimeout(5000);

  await page.locator("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(1) > g:nth-child(2) > g:nth-child(16) > foreignobject:nth-child(2) > div:nth-child(1)").click();
  console.log("select a node");

  page.waitForTimeout(8000);

  //flow lines functionality 
  await page.locator("div:nth-child(7) div:nth-child(1) div:nth-child(2) span:nth-child(1)").click();
  console.log("check flowline functionality");
  page.waitForTimeout(12000);

  //source burger meny dropdown diffusers
  await page.locator("input[value='allDiffusers']").click();
  console.log("diffuser dropdown is checked");
  page.waitForTimeout(12000);

  //selected diffusers
  await page.locator("input[value='selectedDiffusers']").click();
  console.log("selected");
  page.waitForTimeout(3000);

  //velocity dropdown 
  await page.locator("div[class='MuiButtonBase-root MuiIconButton-root MuiExpansionPanelSummary-expandIcon MuiIconButton-edgeEnd'] span[class='MuiIconButton-label'] svg").click();


  await page.locator('#criteria-customized-native-simple').selectOption('Velocity');
  page.waitForTimeout(13000);

  //apply icon is clicked , dropdown -bubble opacity 
  //await page.locator("button[class='MuiButtonBase-root MuiButton-root MuiButton-contained jss648 MuiButton-containedPrimary'] span[class='MuiButton-label']").click();


  await page.getByRole('button', { name: 'Apply' }).click();
  console.log("apply is clciked ");
  page.waitForTimeout(6000);
  await page.getByLabel('Bubble Opacity').check();

  //change the Tempaerature to Farenhite

  await page.goto('https://autonomous-hvac-cfd.simulationhub.com/public/e0Xo9YN/w3oSvmn:HGebwM2:4Tg2j2t/results/flowlines?Source=allDiffusers&colorBy=Temperature&colorSteps=16&showAnimation=true&showFlowlines=true&bubbleOpacity=true&bubbleSize=15&animationSpeed=1');
  await page.getByLabel('SpeedDial example').click();
  await page.getByText('C', { exact: true }).click();
  await page.getByRole('option', { name: 'F' }).click();
  await page.getByRole('button', { name: 'Results: Flow Lines' }).click();

  //thermal comfort functionality 
  
  await page.getByRole('button', { name: 'Thermal Comfort' }).click();
  await page.getByRole('cell', { name: 'Warm', exact: true }).click();
  await page.getByRole('row', { name: 'Warm 2' }).locator('img').click();
  await page.getByRole('row', { name: 'Comfort' }).locator('img').click();
  await page.locator('#extras').click();
});