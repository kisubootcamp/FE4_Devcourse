<script>
export default {
  name: 'CustomerListItem',
  data() {
    return {
      list: [
        {
          Name: 'Neil Sims',
          Email: 'email@windster.com',
          Amount: '$320',
        },
        {
          Name: 'James',
          Email: 'james@gmail.com',
          Amount: '$250',
        },
        {
          Name: 'Smith',
          Email: 'smith@gmail.com',
          Amount: '$600',
        },
        {
          Name: 'Mike',
          Email: 'mike@gmail.com',
          Amount: '$200',
        },
        {
          Name: 'Yarn',
          Email: 'yarn@gmail.com',
          Amount: '$140',
        },
        {
          Name: 'Npm',
          Email: 'npm@gmail.com',
          Amount: '$220',
        },
        {
          Name: 'Han',
          Email: 'han@gmail.com',
          Amount: '$450',
        },
      ],
      viewAll: false,
    }
  },
}
</script>
<template>
  <h1>CustomerListItem Vue</h1>
</template>
<style scoped></style>
