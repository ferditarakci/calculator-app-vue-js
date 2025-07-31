const keys = [
  { key: 'c', title: 'Clear', style: 'red' },
  { key: '<', title: 'Back', style: 'blue' },
  { key: '%', title: 'Percent', style: 'blue' },
  { key: '/', title: 'Divide', style: 'blue' },
  { key: '7', title: 'Seven', style: 'white' },
  { key: '8', title: 'Eight', style: 'white' },
  { key: '9', title: 'Nine', style: 'white' },
  { key: '*', title: 'Multiply', style: 'blue' },
  { key: '4', title: 'Four', style: 'white' },
  { key: '5', title: 'Five', style: 'white' },
  { key: '6', title: 'Six', style: 'white' },
  { key: '-', title: 'Subtract', style: 'blue' },
  { key: '1', title: 'One', style: 'white' },
  { key: '2', title: 'Two', style: 'white' },
  { key: '3', title: 'Three', style: 'white' },
  { key: '+', title: 'Add', style: 'blue' },
  { key: '0', title: 'Zero', style: 'white' },
  { key: '.', title: 'Decimal', style: 'white' },
  { key: '=', title: 'Equal', style: 'green' },
]

const equivKeys = {
  Enter: '=',
  Backspace: '<',
  Delete: 'c',
  ',': '.',
}

export { keys, equivKeys }
