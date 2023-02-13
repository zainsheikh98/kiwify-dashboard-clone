const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const isEmailValid = (email: string): boolean => {
    return EMAIL_REGEX.test(email)
}

export { EMAIL_REGEX, isEmailValid }
