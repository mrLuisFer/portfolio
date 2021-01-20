import emailjs from "emailjs-com"

export function sendEmail(e: any) {
  e.preventDefault()
  console.log(e.target)
  const EMAIL_SERVICE: any = process.env.REACT_APP_EMAIL_SERVICE
  const TEMPLATE_ID: string | undefined | any =
    process.env.REACT_APP_TEMPLATE_ID
  const USER_ID: string | undefined = process.env.REACT_APP_USER_ID

  emailjs.sendForm(EMAIL_SERVICE, TEMPLATE_ID, e.target, USER_ID).then(
    (result) => {
      console.log(result.text)
    },
    (error) => {
      console.log(error.text)
    }
  )

  e.target.reset()
}
