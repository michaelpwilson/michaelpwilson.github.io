<template>
    <div>
        <a :href="href">{{ text }}</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        text: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    @import "../scss/variables";

    a {
        display: inline-block;
        color: white;
        font-size: 1rem;
        text-decoration: none;
        font-weight: 700;
        border: 1px solid white;
        padding: .5rem 2rem;
        text-transform: uppercase;
        border-radius: 2rem;

        &:hover {
            background-color: $website-heading-gradient-color-1;
        }
    }
  </style>