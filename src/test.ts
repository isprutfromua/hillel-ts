const getEl = el => document.querySelector(el)
const getEls = el => document.querySelectorAll(el)
const attributesConfig = {
  attributeFilter: ['aria-busy'],
  attributes: true,
  attributeOldValue: true,
}
const elementsConfig = {
  subtree: true,
  childList: true,
}
const selectors = {
  checkout: '.l-checkout',
  productsContainer: '.b-checkout_products-content',
  shippingMethodsContainer: '.b-checkout_product-shipping_container',
  shippingMethodInput: '.b-option_switch-input',
  shippingForm: '.b-form.m-checkout_shipping',
}
const attrChecker = el => el.oldValue === 'true'
const shipMethodsChecker = () =>
  getEls(selectors['shippingMethodsContainer'])?.length
const waitForLoading = (el, config, checker, disable = true, cbc) => {
  return new Promise(resolve => {
    const cb = (mutations, observer) => {
      for (const mutation of mutations) {
        if (checker(mutation)) {
          cbc ? cbc() : resolve()
          disable && observer.disconnect()
        }
      }
    }

    const observer = new MutationObserver(cb)
    observer.observe(el, config)
  })
}

const methodsID = {
  EXPRESS_SHIPPING: 'USD004',
  LOCAL_PICKUP: 'USD000',
  THRESHOLD_DELIVERY: 'USD006',
  UPS: 'USD007',
}

function selectShippingMethod(el, methodID) {
  const shippingSwatchSelector =
    selectors['shippingMethodInput'] + `[value='${methodID}']`
  const shippingSwatch = el.querySelector(shippingSwatchSelector)
  const shippingLabelEl = shippingSwatch?.parentNode?.querySelector('label')

  if (shippingLabelEl) {
    shippingLabelEl.click()
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  // waiting for checkout
  const checkoutEl = getEl(selectors['checkout'])
  await waitForLoading(checkoutEl, attributesConfig, attrChecker)
  console.log('checkout loaded')
  // checkout loaded, waiting for shipping methods loading
  const shipFormEl = getEl(selectors['shippingForm'])
  const productsEl = getEl(selectors['productsContainer'])
  await waitForLoading(productsEl, elementsConfig, shipMethodsChecker)

  console.log('products loaded')

  const shipMethods = getEls(selectors['shippingMethodsContainer'])

  let id = 0
  selectShippingMethod(shipMethods[id++], methodsID['THRESHOLD_DELIVERY'])
  console.log('selected method for product', id - 1)

  waitForLoading(shipFormEl, attributesConfig, attrChecker, false, async () => {
    await waitForLoading(checkoutEl, attributesConfig, attrChecker)
    const method = shipMethods[id++]
    if (method) {
      console.log('selected method for product', id)
      selectShippingMethod(method, methodsID['THRESHOLD_DELIVERY'])
    }
  })
})
