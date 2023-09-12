// @ts-check
import { test, expect } from '@playwright/test'
/**
 * Como no vas a tener tiempo de hacer mucho aquí, lo más importante sería hacer el test end-to-end 
 * El test: al menos salga un testo y una imagen
*/
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/' // ruta a la cual tiene que ir y buscar lo que visualizar

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

// esto es lo mínimo que hace falta para que algo se renderice. No nos dirá que está bien o que no, simplemente si hay algo
