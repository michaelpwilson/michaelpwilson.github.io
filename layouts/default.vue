
<template>
      <nav class="nav">
        <div class="container">
            <div class="nav__logo">
                <NuxtLink to="/">Website</NuxtLink>
            </div>
            <div class="nav__menu">
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">Portfolio</NuxtLink>
                    </li>
                    <li>
                        <a href="https://github.com/michaelpwilson">Github</a>
                    </li>
                </ul>
            </div>
            <div class="nav__action">
                <Button text="Get a Quote" href="http://localhost:4200/" target="_blank" />
            </div>
        </div>

      </nav>
      <main>
        <NuxtPage />
      </main>

      <footer class="footer">
        <div class="container">
            <div class="footer__section">
                <h3>Website</h3>
                <p>Copyright © 2023 Michael Wilson Limited.</p>
                <p>Built with love in the United Kingdom.</p>
            </div>
            <div class="footer__links">
                <h5>Quick Links</h5>
                <ul>
                    <li>
                        <NuxtLink to="/about">Portfolio</NuxtLink>
                    </li>
                    <li>
                        <a href="https://github.com/michaelpwilson">Github</a>
                    </li>
                </ul>
            </div>
            <div class="footer__links">
                <h5>Say Hello</h5>
                <ul>
                    <li>
                        <a href="mailto:admin@example.com">Email: admin@example.com</a>
                    </li>
                    <li>
                        <a href="tel:01957485123">Phone: 01957485123</a>
                    </li>
                </ul>
            </div>
        </div>
      </footer>
</template>

<style lang="scss">
@import "../scss/variables";

.nav {
    background-color: rgb(0 0 0 / 9%);
    border-bottom: 1.5px solid rgb(0 0 0 / 10%);

    .container {
        display: flex;
        align-items: center;
        width: 100%;
    }

    &__logo {
        font-weight: 800;

        a {
            color: white;
            font-size: 1.75rem;
            text-decoration: none;
            display: block;
            font-weight: 700;
            padding: 1rem 0;
        }
    }

    &__menu {
        flex: 1;
        text-align: center;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: inline-block;

            & > li {
                display: inline-block;

                a {
                    padding: 1rem;
                    color: white;
                    text-decoration: none;
                    font-weight: 700;
                    border-radius: 1rem;
                    padding: 0.75rem 1.25rem;

                    &.router-link-exact-active {
                        background-color: rgb(0 0 0 / 18%);
                    }
                }
            }
        }
    }

    &__action {
    }
}

.footer {
    background-color: rgb(0 0 0 / 9%);
    padding: 2rem 0;
    padding-top: 5rem;

    .container {
        display: grid;
        grid-template-columns: 2.5fr 1.5fr 2fr;
        grid-column-gap: 2rem;
    }

    &__section {
        h3 {
            margin-top: 0;
            color: white;
            font-size: 2.5rem;
            font-weight: 700;
        }
    }

    &__links {
        h5 {
            margin-top: 0;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            & > li {
                a {
                    text-decoration: none;
                    color: white;
                    font-size: 1.1rem;
                    opacity: 0.6;
                    display: block;
                    padding: 0.5rem 0;
                }
            }
        }
    }
}
</style>

<script>
import Button from '~/components/button';

export default {
  components: {
    Button
  }
}

</script>