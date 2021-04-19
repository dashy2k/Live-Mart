import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'

const paymentMethods = [
  {
    value: 'COD',
    label: 'Cash On Delivery'
  },
  {
    value: 'Credit',
    label: 'Credit Cards'
  }
]

export default function PaymentForm () {

  const [paymentMode, setPaymentMode] = React.useState('COD')

  const handleChange = event => {
    setPaymentMode(event.target.value)
  }

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            id='filled-select-currency'
            select
            label='Select'
            value={paymentMode}
            onChange={handleChange}
            helperText='Select your Payment Mode'
            variant='filled'
          >
            {paymentMethods.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      {paymentMode == 'Credit' && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardName'
              label='Name on card'
              fullWidth
              autoComplete='cc-name'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardNumber'
              label='Card number'
              fullWidth
              autoComplete='cc-number'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='expDate'
              label='Expiry date'
              fullWidth
              autoComplete='cc-exp'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cvv'
              label='CVV'
              helperText='Last three digits on signature strip'
              fullWidth
              autoComplete='cc-csc'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color='secondary' name='saveCard' value='yes' />
              }
              label='Remember credit card details for next time'
            />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  )
}
