import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const waitForAppReady = async (page: Page) => {
  await page
    .locator("#home")
    .waitFor({ state: "visible", timeout: 15000 });
};

test.describe("portfolio smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await waitForAppReady(page);
  });

  test("navigation links scroll to sections", async ({ page }) => {
    await page.getByRole("link", { name: /about/i }).click();
    await expect(page.locator("#about")).toBeInViewport();

    await page.getByRole("link", { name: /projects/i }).click();
    await expect(page.locator("#projects")).toBeInViewport();

    await page.getByRole("link", { name: /contact/i }).click();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("project gallery navigates inline", async ({ page }) => {
    await page.getByRole("link", { name: /projects/i }).click();
    const projectsSection = page.locator("#projects");
    await projectsSection.scrollIntoViewIfNeeded();

    const nextButton = projectsSection
      .getByRole("button", { name: /next .* image/i })
      .first();
    await nextButton.waitFor({ state: "visible" });

    await expect(
      projectsSection.getByRole("img", { name: /preview 2/i }),
    ).toHaveCount(0);
    await nextButton.click();
    await expect(
      projectsSection.getByRole("img", { name: /preview 2/i }),
    ).toHaveCount(1);
  });
});
