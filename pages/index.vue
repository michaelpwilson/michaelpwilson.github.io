<template>
  <section class="section container">
    <div class="banner">
      <h1 class="banner__title">Top Web Agency Offering Customized Digital Solutions To Boost Your Online Presence</h1>
    </div>
    <div class="grid">
      <div class="grid__item">
        <div>
          <font-awesome-icon icon="fa-solid fa-cloud" />
        </div>
        <h3>Cloud Development</h3>
        <p>Our experienced team specializes in cloud development services, including cloud computing, storage, security, and scalability solutions for businesses of all sizes.</p>
      </div>
      <div class="grid__item">
        <div>
          <font-awesome-icon icon="fa-solid fa-code" />
        </div>
        <h3>Backend Development</h3>
        <p>Our skilled backend developers provide customized solutions for building and optimizing web applications, APIs, and databases that meet the unique needs of your business.</p>
      </div>
      <div class="grid__item">
        <div>
          <font-awesome-icon icon="fa-solid fa-code-branch" />
        </div>
        <h3>App Development</h3>
        <p>We offer full-cycle mobile and desktop services that are optimized for all major operating systems, including iOS, Android, and Windows, delivering seamless user experiences that drive engagement.</p>
      </div>
    </div>
  </section>
  <section class="section--alternate">
    <div class="container">
      <h4>Lead Frontend Developer</h4>
      <h3>Companies We Have Worked With</h3>
      <div class="section__images">
        <img src="/images/logos/playstation.png"/>
        <img style="height: 6.75rem" src="/images/logos/blackrock.png"/>
        <img src="/images/logos/shelter.png" style="height: 5rem;"/>
        <img style="height: 10rem" src="/images/logos/kuflink.png"/>
        <img style="height: 7rem" src="/images/logos/ustwo.png"/>
        <img src="/images/logos/greenlight.png"/>
        <img src="/images/logos/chas.png"/>
        <div>
          <Button text="Get a Quote" href="#" />
        </div>
      </div>
    </div>
  </section>

  <section class="section--person container">
    <div class="section__body">
      <h4>Lead Frontend Developer</h4>
      <h3>Michael Wilson</h3>
      <p class="section__body-subtitle">If you're looking for a skilled Angular developer with 10 years of experience, you've come to the right place! Our agency is home to some of the most experienced and talented developers in the industry, and we pride ourselves on delivering high-quality solutions to our clients.</p>

<p class="section__body-description">Our Angular developers have a deep understanding of the framework and can create complex web applications that meet your specific requirements. With a decade of experience under their belt, they have honed their skills and can tackle any challenge that comes their way. Whether you need a simple website or a complex enterprise application, our developers can deliver it on time and within budget.</p>
      <div>
          <Button text="Get a Quote" href="#" />
        </div>
    </div>
    <div class="section__image">
      <div>
        <img src="/images/generic/Michael.jpg"/>
      </div>
    </div>
  </section>

  <section class="section--alternate">
    <div class="container">
      <h4>Lead Frontend Developer</h4>
      <h3>Technologies We Build With</h3>
      <div class="section__images" style="grid-row-gap: 2rem;">
        <img src="/images/logos/typescript.png"/>
        <img src="/images/logos/angular.png" style="height: 10rem;"/>
        <img src="/images/logos/react.png" style="height: 8.75rem;"/>
        <img src="/images/logos/nuxt.png" style="height: 4.75rem;"/>
        <img src="/images/logos/vue.png" style="height: 7.75rem;"/>
        <img src="/images/logos/nest.png" style="height: 7.75rem;"/>
        <img src="/images/logos/express.png" style="height: 3.75rem;"/>
        <div>
          <Button text="View More" href="#" />
        </div>
      </div>
    </div>
  </section>

  <section class="section--news">
    <div class="container">
      <h4>Lead Frontend Developer</h4>
      <h3>Latest News</h3>

      <div class="grid">
        <div class="grid__item">
          <NuxtLink class="card" style="background-image: url('/images/blogs/01.svg')" to="/sprinkling-magic-why-frontend-development-crucial-website-success">
            <span class="card__body">
              <h5 class="card__body-tag">App Development</h5>
              <h4 class="card__body-title">Creating User-Friendly Websites That Wow</h4>
            </span>
          </NuxtLink>
        </div>
        <div class="grid__item">
          <div class="card" style="background-image: url('/images/blogs/02.svg')">
            <div class="card__body">
              <h5 class="card__body-tag">Cloud Development</h5>
              <h4 class="card__body-title">Granting Your Business Wishes: How AWS Cloud Development Can Help You Achieve Your Goals</h4>
            </div>
          </div>
        </div>
        <div class="grid__item">
          <div class="card" style="background-image: url('/images/blogs/03.svg')">
            <div class="card__body">
              <h5 class="card__body-tag">Backend Development</h5>
              <h4 class="card__body-title">Unleash Your Inner Superhero: How Nest.js Makes Server-Side App Development Easy and Fun</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
import Button from '../components/button';

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

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  margin-top: 1rem;

  &__item {
    text-align: center;

    svg {
      height: 4rem;
      color: $website-heading-gradient-color-1;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    p {
      opacity: 0.7;
      font-size: 1.1rem;
      line-height: 1.8rem;
    }
  }
}

.section--alternate {
  @extend .section;

  text-align: center;
  background-color: rgb(0 0 0 / 9%);

  h3 {
    font-size: 2.75rem;
  }

  .section__images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;

    & > * {
      margin: 0 auto;
      height: 3.75rem;
    }
  }
}

.section--person {
  @extend .section;
  display: flex;
  align-items: center;

  .section__body {
    flex: 1;
    margin-right: 2.5rem;

    h3 {
      margin-bottom: 1.5rem;
    }

    &-subtitle {
      font-size: 1.5rem;
    }

    &-description {
      line-height: 1.7rem;
      opacity: 0.6;
    }
  }

  .section__image {
    img {
      border-radius: 100%;
    }
  }
  h3 {
    font-size: 3rem;
  }
}

.section--news {
  @extend .section;

  .grid__item {
    text-align: left;
  }

  h3, h4 {
    text-align: center;
  }

  h3 {
    font-size: 2.75rem;
  }

  h5 {
    font-weight: normal;
  }
}

.card {
  background-color: black;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  border-radius: 2rem;
  background-image: url(/images/blogs/01.svg);
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  text-decoration: none;
  color: inherit;

  &__body {
    &-tag {
      margin-bottom: 0;
    }

    h4 {
      background: none;
      -webkit-text-fill-color: white;
      text-align: left;
      font-size: 1.125rem;
    }
  }


}
</style>