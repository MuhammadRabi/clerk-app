import PaymentMessage from '@/components/PaymentMessage'

export default function CheckoutSuccess() {
  return (
    <PaymentMessage
      message={'your payment was successful!'}
      text={
        'Thank you for your payment, we will be in contact with more details shortly!'
      }
      type={'success'}
    />
  )
}
