import { test, expect } from '@playwright/test';

test('Simulate 500 Server Error using page.route()', async ({ page }) => {
  // 1. Create a sleek UI inside the browser (No external web server needed!)
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, sans-serif; padding: 40px; background: #0f172a; color: white; display: flex; flex-direction: column; align-items: center; }
        .card { background: #1e293b; padding: 30px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); text-align: center; width: 350px; }
        button { padding: 12px 24px; font-size: 15px; font-weight: 600; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; transition: 0.2s; }
        button:hover { background: #2563eb; }
        .error { margin-top: 20px; padding: 12px; background: #ef4444; color: white; border-radius: 8px; display: none; font-size: 14px; font-weight: 500; }
      </style>
    </head>
    <body>
      <div class="card">
        <h2>Wholesaler Orders</h2>
        <button id="fetch-btn" onclick="loadOrders()">Load Latest Orders</button>
        <div id="error-banner" class="error">⚠️ 500 Internal Server Error: Could not fetch orders</div>
      </div>

      <script>
        async function loadOrders() {
          try {
            const res = await fetch('/api/v1/orders');
            if (!res.ok) throw new Error('Server Error');
          } catch (err) {
            document.getElementById('error-banner').style.display = 'block';
          }
        }
      </script>
    </body>
    </html>
  `);

  // 2. INTERCEPT THE API: Force the '/api/v1/orders' endpoint to return a 500 Error
  await page.route('**/api/v1/orders', async (route) => {
    await page.waitForTimeout(800); // Small delay so the recording looks natural
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Database connection failed' }),
    });
  });

  // 3. Click the button to trigger the API call
  await page.click('#fetch-btn');

  // 4. Assert that the UI gracefully catches the 500 error and shows the banner
  await expect(page.locator('#error-banner')).toBeVisible();

  // Wait 2 seconds so the final error screen stays visible in your video recording
  await page.waitForTimeout(2000);
});