import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  //a. Truy cập trang web: https://material.playwrightvn.com/ 
  await page.goto('https://material.playwrightvn.com/');

  //b. Kiểm tra rằng Title contains text "Tài liệu học automation test"
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  //a. Truy cập trang web: https://material.playwrightvn.com/ 
  await page.goto('https://material.playwrightvn.com/');

  //b. Click vào link chứa text: "Bài học 1: Register Page"
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  //c. Kiểm tra trang web có chứa thẻ heading với nội dung: "User Registration"
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
