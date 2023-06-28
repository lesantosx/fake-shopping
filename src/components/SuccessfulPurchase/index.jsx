import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export default function SuccessfulPurchase(){
  return (
    <center className='p-20'>
      <CheckCircleOutlineIcon sx={{ fontSize: 150}} className='text-green-500'/>
      <p className='mt-5' style={{ fontSize: 40}}>Purchase made successfully!</p>
      <p style={{ fontSize: 40}}>Thanks for shopping with us.</p>
    </center>
  )
}