import { observable, action, computed } from "mobx"

class Store {
  @observable user = "Peter Gabriel"

  @observable messages = [
    require('../messages/01.md'),
    require('../messages/02.md'),
    // require('../messages/03.md'),
    // require('../messages/04.md'),
    // require('../messages/05.md'),
    // require('../messages/06.md'),
    // require('../messages/07.md'),
    // require('../messages/08.md'),
    // require('../messages/09.md'),
    // require('../messages/10.md'),
    // require('../messages/11.md'),
    // require('../messages/12.md'),
    // require('../messages/13.md'),
    // require('../messages/14.md'),
    // require('../messages/15.md'),
    // require('../messages/16.md'),
    // require('../messages/17.md'),
    // require('../messages/18.md'),
    // require('../messages/19.md'),
    // require('../messages/20.md'),
  ]

  @observable selectedMessageIndex = 0

  @action
  selectMessage(index) {
    this.selectedMessageIndex = index
  }

  @computed
  get selectedMessage() {
   return this.messages[this.selectedMessageIndex]
  }
}

export default Store
