import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const waitForAppReady = async (page: Page) => {
  await page
    .locator("#page-scroll")
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

  test("project gallery modal opens, navigates, and closes", async ({ page }) => {
    await page.getByRole("link", { name: /projects/i }).click();
    const projectsSection = page.locator("#projects");
    await projectsSection.scrollIntoViewIfNeeded();
    const showImagesButton = projectsSection
      .getByRole("button", { name: "Show Images" })
      .first();
    await showImagesButton.waitFor({ state: "visible" });
    await showImagesButton.click();

    const dialog = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(dialog).toBeVisible();
    await expect(page.locator("body")).toHaveClass(/modal-open/);

    const count = page.locator("#project-gallery-count");
    if (await count.count()) {
      const nextButton = dialog.getByRole("button", { name: "Next image" });
      if (await nextButton.count()) {
        const initialCount = (await count.textContent()) ?? "";
        await nextButton.click();
        await expect(count).not.toHaveText(initialCount);
      }
    }

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(page.locator("body")).not.toHaveClass(/modal-open/);
  });
});
