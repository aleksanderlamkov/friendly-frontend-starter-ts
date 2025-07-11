import getAttrNameFromSelector from '@/utils/getAttrNameFromSelector'
import IMask, { InputMaskElement } from 'imask'

const rootSelector = '[data-js-input-mask]'

class InputMask {
  rootElement: Element

  selectors = {
    root: rootSelector,
  }

  constructor(rootElement: Element) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    const mask = this.rootElement.getAttribute(
      getAttrNameFromSelector(this.selectors.root)
    )

    if (mask) {
      IMask(this.rootElement as InputMaskElement, { mask })
    }
  }
}

class InputMaskCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}

export default InputMaskCollection
