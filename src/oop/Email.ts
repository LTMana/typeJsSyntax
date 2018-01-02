export default class Email {
  private email: string
  constructor (email: string) {
    if (this.validateEmail(email)) {
      this.email = email
    } else {
      throw new Error('Invalid email')
    }
  }
  private validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }
  get(): string {
    return this.email
  }
}