export default function modalText(buttonSource) {
  const textObj = {
    header: '',
    text: '',
    category: '',
    name: '',
    amount: '',
    submit: '',
  };

  if (buttonSource === 'Add Budget' || buttonSource === 'Edit Budget') {
    textObj.category = 'Budget Category';
    textObj.amount = 'Maximum Spend';
  }

  if (buttonSource === 'Add Budget') {
    textObj.header = 'Add New Budget';
    textObj.text =
      'Choose a category to set a spending budget. These categories can help you monitor spending.';
    textObj.submit = 'Add Budget';
  }

  if (buttonSource === 'Edit Budget') {
    textObj.header = 'Edit Budget';
    textObj.text =
      'As your budget changes, feel free to update your spending limits.';
    textObj.submit = 'Save Changes';
  }

  if (buttonSource === 'Add Pot' || buttonSource === 'Edit Pot') {
    textObj.name = 'Pot Name';
    textObj.amount = 'Target';
  }

  if (buttonSource === 'Add Pot') {
    textObj.header = 'Add New Pot';
    textObj.text =
      'Create a pot to set savings targets. These can help keep you on track as you save for special purchases.';
    textObj.submit = 'Add Pot';
  }

  if (buttonSource === 'Edit Pot') {
    textObj.header = 'Edit Pot';
    textObj.text =
      'If your savings targets change, feel free to update your pots.';
    textObj.submit = 'Save Changes';
  }

  return textObj;
}
