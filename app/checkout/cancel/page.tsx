import PaymentMessage from '@/components/PaymentMessage'

export default function checkoutCancel() {
  return (
    <PaymentMessage
      message={'payment was cancelled!'}
      text={'We are sorry to inform you that the payment was cancelled!'}
      type={'cancel'}
    />
  )
}
