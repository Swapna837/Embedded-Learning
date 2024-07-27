import { test, expect } from '@playwright/test';

test.describe('Weather App - Temperature Display Tests', () => {
  const BASE_URL = 'http://localhost:3000'; // Update with your server URL if different

  test.beforeEach(async ({ page }) => {
    // Navigate to your weather app before each test
    await page.goto(BASE_URL); // Use the correct base URL
  });

  test('should display the correct temperature for a valid city', async ({ page }) => {
    // Fill the city input with a valid city name and submit the form
    await page.fill('input[name="city"]', 'Hyderabad');
    await page.click('text=Get Weather');

    });

  test('should display the correct maximum temperature for a valid city', async ({ page }) => {
    // Fill the city input with a valid city name and submit the form
    await page.fill('input[name="city"]', 'Hyderabad');
    await page.click('text=Get Weather');
   
  })

  test('should display the correct minimum temperature for a valid city', async ({ page }) => {
    // Fill the city input with a valid city name and submit the form
    await page.fill('input[name="city"]', 'Hyderabad');
    await page.click('text=Get Weather');
  })
});
