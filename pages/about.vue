<template>
  <div class="page">
    <section class="section container">
      <div class="banner">
        <h1 class="banner__title">A Look into Our Web Design and Development Portfolio</h1>
      </div>
    </section>

    <section class="section--portfolio">
      <div class="container">
        <div class="section__image"></div>
        <div class="section__body">
          <h3>Chas 2013 Limited</h3>
          <p>In this portfolio section, we showcase an Angular registration journey built for our client Chas. The registration journey was designed specifically for onboarding companies to pay to join the platform and receive assessments for compliance in the construction industry.</p>
          <p>Using Angular, we developed a seamless and intuitive registration process that guides users through the necessary steps to get started with Chas. From creating an account to submitting payment information, our registration journey is designed to be straightforward and user-friendly.</p>
          <p>We also implemented several features to enhance the user experience, including form validation and error handling. This ensures that users are able to enter the correct information and are alerted if there are any issues with their submission.</p>
          <p>Our Angular registration journey is a critical component of the overall Chas platform, as it serves as the gateway for companies to access valuable compliance assessments. We are proud to have developed a registration process that is efficient, effective, and user-friendly, helping to streamline the onboarding process for Chas and its customers.</p>     
        </div>
      </div>
    </section>

    <section class="section--portfolio-alternate">
      <div class="container">
        <div class="section__body">
            <h3>BlackRock</h3>
            <p>In this portfolio section, we showcase our work with Blackrock, a global investment management firm, where we helped them build a robust design system to improve the consistency and efficiency of their web development process.</p>
            <p>We worked closely with Blackrock's team to understand their needs and objectives, and created a design system using Angular, which included reusable web components such as buttons, forms, and tables. These components were specifically designed to match Blackrock's branding guidelines and were thoroughly tested to ensure they were accessible and compatible across all major browsers and devices.</p>
            <p>By implementing this design system, Blackrock was able to achieve greater consistency in the design and functionality of their website pages, as well as streamline their development process. Their team was able to easily create new pages using the reusable components, which ultimately saved them time and resources.</p>
            <p>We are proud to have helped Blackrock achieve their goals and to have provided them with a robust design system that they can use as a foundation for their website development for years to come.</p>   
          </div>
        <div class="section__image"></div>
      </div>
    </section>

    <section class="section--portfolio">
      <div class="container">
        <div class="section__image"></div>
        <div class="section__body">
          <h3>Kuflink Limited</h3>
          <p>a start-up company in need of a design system and corresponding web and mobile applications to launch their investment platform. We worked closely with the Kuflink team to understand their business objectives, user needs, and branding to create a cohesive design system that reflects their vision and values.</p>
          <p>We utilized our expertise in UI/UX design to create wireframes and interactive prototypes that showcased the platform's functionality and usability, ensuring that the user experience was intuitive and engaging.</p>
          <p>Once the design system was established, we worked to develop both web and mobile applications, ensuring that they were consistent with the established brand guidelines. Our developers utilized modern front-end technologies such as Angular and NativeScript to build a scalable and performant platform.</p>
          <p>The web application and mobile app that we developed for Kuflink are intuitive, user-friendly, and responsive across all devices. The platform allows users to easily invest in a range of loans, access real-time investment data, and manage their portfolios seamlessly. With our help, Kuflink was able to launch their investment platform and establish a strong online presence, leading to significant growth and success.</p>
        </div>
      </div>
    </section>

    <div class="banner">
      <h2 class="banner__title">Code Projects</h2>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rendering: process.server ? 'server' : 'client'
      }
    }
  }
</script>

<style lang="scss">
@import "../scss/variables";

.section--portfolio {
  @extend .section;

  &:first-child {
    padding-top: 0;
  }  

  .container {
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    grid-column-gap: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  .section__image {
    background-color: black;
    border-radius: 2rem;
    background-image: url('/images/portfolio/chas.jpg');
    background-size: 110%;
    transition: background-size .5s ease-in;
    background-position: center;

    &:hover {
      background-size: 150%;
      background-position: right;
    }
  }
}

.section--portfolio-alternate {
  @extend .section--portfolio;
  background-color: rgb(0 0 0 / 9%);

  .container {
    grid-template-columns: 1fr 0.75fr;
  }
}

.page section:nth-child(2) {
  padding-top: 0;
}
</style>